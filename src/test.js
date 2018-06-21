import * as PIXI from 'pixi.js';
import Viewport from 'pixi-viewport';
import IsoGrid from './IsoGrid';
import Building from './Building';

const mapSize         = {x: 3, y: 3};
const cellSize        = {x: 640, y: 320};
const grid            = new IsoGrid(0, 0, cellSize.x, cellSize.y);
const buildingOffsetY = -13;

function onLoad () {
  let app = new PIXI.Application();

  app.renderer.backgroundColor     = 0x5900FF;
  app.renderer.view.style.position = 'absolute';
  app.renderer.view.style.display  = 'block';
  document.body.appendChild(app.view);

  window.addEventListener('resize', resizeToFullWindow);

  const viewport = new Viewport();
  app.stage.addChild(viewport);
  viewport
  .drag()
  .wheel();

  function resizeToFullWindow () {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    viewport.resize(window.innerWidth, window.innerHeight, window.innerWidth, window.innerHeight);
  }

  resizeToFullWindow();

  PIXI.loader
  .add([
    {name: 'tile', url: './assets/tile.png'},
    {name: 'building_atlas', url: './assets/building.json'}
  ])
  .load(onAssetsLoaded);

  const mousePosText = new PIXI.Text(''),
        isoPosText   = new PIXI.Text('');

  const tiles     = {};
  const buildings = {};

  function onAssetsLoaded (resources) {
    const tileTexture = PIXI.Texture.fromImage('tile');

    //make background layer
    for (let i = 0; i < mapSize.x; i++) {
      tiles[i] = {};
      for (let j = 0; j < mapSize.y; j++) {
        const tileSprite = new PIXI.Sprite(tileTexture);
        const tilePos    = grid.isoToScreen(i, j);
        tileSprite.anchor.set(0.5, 1);
        tileSprite.position.set(tilePos.x, tilePos.y + cellSize.y);
        viewport.addChild(tileSprite);
        tiles[i][j] = tileSprite;
      }
    }
    //make buildings layer
    for (let i = 0; i < mapSize.x; i++) {
      buildings[i] = {};
      for (let j = 0; j < mapSize.y; j++) {
        const tilePos  = grid.isoToScreen(i, j);
        const building = new Building();
        building.position.set(tilePos.x, tilePos.y + cellSize.y + buildingOffsetY);
        building.scale.set(0.8);
        viewport.addChild(building);
        buildings[i][j] = building;
      }
    }
    const mapCenter = grid.isoToScreen(mapSize.x / 2 - 1, mapSize.y / 2 - 1);
    viewport.moveCenter(mapCenter.x, mapCenter.y);

    mousePosText.position.set(0, 0);
    isoPosText.position.set(0, 30);
    app.stage.addChild(mousePosText);
    app.stage.addChild(isoPosText);

    viewport.on('pointermove', onPointerMove);
    viewport.on('moved', onViewportMove);
    app.ticker.add(dt => {
      // console.log(dt);
    });
  }

  function onPointerMove (e) {
    const world       = viewport.toWorld(e.data.global);
    const iso         = grid.screenToIsoFloor(world.x, world.y);
    mousePosText.text = `Mouse X: ${world.x.toFixed(2)} Y: ${world.y.toFixed(2)}`;
    isoPosText.text   = `Iso X: ${iso.x.toFixed(2)} Y: ${iso.y.toFixed(2)}`;
  }

  let selectedTile     = null;
  let selectedBuilding = null;

  function onViewportMove ({center}) {
    const isoPos               = grid.screenToIsoFloor(center.x, center.y);
    const nextSelectedTile     = tiles[isoPos.x] && tiles[isoPos.x][isoPos.y];
    const nextSelectedBuilding = buildings[isoPos.x] && buildings[isoPos.x][isoPos.y];

    if (nextSelectedTile !== selectedTile) {
      if (nextSelectedTile != null) {
        nextSelectedTile.tint = 0xff0000;
      }
      if (selectedTile != null) {
        selectedTile.tint = 0xffffff;
      }
    }
    selectedTile = nextSelectedTile;

    if (nextSelectedBuilding !== selectedBuilding) {
      if (nextSelectedBuilding != null) {
        nextSelectedBuilding.activate();
      }
      if (selectedBuilding != null) {
        selectedBuilding.deactivate();
      }
    }
    selectedBuilding = nextSelectedBuilding;
  }
}

window.addEventListener('load', onLoad);