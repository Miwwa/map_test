import * as PIXI from 'pixi.js';
import Viewport from 'pixi-viewport';
import IsoGrid from './IsoGrid';

const mapSize  = {x: 10, y: 10};
const cellSize = {x: 800, y: 600};
const grid     = new IsoGrid(0, 0, cellSize.x, cellSize.y);

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
    {name: 'bunny', url: 'https://cdn.rawgit.com/staff0rd/pixi-tilesprite/d1beeb8f/bunnies-1.png'},
    {name: 'tile', url: '/assets/Zagotovka_one.png'},
    {name: 'road', url: '/assets/Road_temp.png'}
  ])
  .load(onAssetsLoaded);

  const mousePosText = new PIXI.Text(''),
        isoPosText   = new PIXI.Text('');

  const tiles = [];

  function onAssetsLoaded (resources) {
    const tileTexture              = PIXI.Texture.fromImage('tile');
    tileTexture.baseTexture.mipmap = false;

    for (let i = 0; i < mapSize.x; i++) {
      tiles[i] = [];
      for (let j = 0; j < mapSize.y; j++) {
        const tileSprite = new PIXI.Sprite(tileTexture);
        const tilePos    = grid.isoToScreen(i, j);
        tileSprite.anchor.set(0.5, 1);
        tileSprite.position.set(tilePos.x, tilePos.y + cellSize.y);
        tileSprite.width  = cellSize.x;
        tileSprite.height = cellSize.y;
        viewport.addChild(tileSprite);
        tiles[i][j] = tileSprite;
      }
    }
    const mapCenter = grid.isoToScreen(mapSize.x / 2 - 1, mapSize.y / 2 - 1);
    viewport.moveCenter(mapCenter.x, mapCenter.y);

    mousePosText.position.set(0, 0);
    isoPosText.position.set(0, 50);
    app.stage.addChild(mousePosText);
    app.stage.addChild(isoPosText);

    viewport.on('pointermove', onPointerMove);
    viewport.on('moved', onViewportMove);
  }

  function onPointerMove (e) {
    const world       = viewport.toWorld(e.data.global);
    const iso         = grid.screenToIsoFloor(world.x, world.y);
    mousePosText.text = `Mouse X: ${world.x.toFixed(2)} Y: ${world.y.toFixed(2)}`;
    isoPosText.text   = `Iso X: ${iso.x.toFixed(2)} Y: ${iso.y.toFixed(2)}`;
  }

  let selectedTile = null;

  function onViewportMove({center}) {
    const isoPos = grid.screenToIsoFloor(center.x, center.y);
    const nextSelected = tiles[isoPos.x][isoPos.y];

    if (nextSelected != null) {
      nextSelected.tint = 0xff0000;
    }
    if (selectedTile != null && nextSelected !== selectedTile) {
      selectedTile.tint = 0xffffff;
    }
    selectedTile = nextSelected;
  }
}

window.addEventListener('load', onLoad);