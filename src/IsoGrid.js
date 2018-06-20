export default class IsoGrid {
  /**
   * Helper to calc iso grid coords
   * https://yal.cc/understanding-isometric-grids/
   * @param mapX global coordinate X of grid staring point
   * @param mapY global coordinate Y of grid starting point
   * @param tileWidth cell width
   * @param tileHeight cell height
   */
  constructor (mapX, mapY, tileWidth, tileHeight) {
    this.mapX       = mapX;
    this.mapY       = mapY;
    this.tileWidth  = tileWidth;
    this.tileHeight = tileHeight;
  }

  /**
   * calc screen position of upper corner of tile
   * @param isoX tile iso pos x
   * @param isoY tile iso pos y
   * @returns {{x, y}}
   */
  isoToScreen (isoX, isoY) {
    return {
      x: this.mapX + (isoX - isoY) * this.tileWidth / 2,
      y: this.mapY + (isoX + isoY) * this.tileHeight / 2
    };
  }

  /**
   * calc float iso position by screen position
   * @param screenX screen position X
   * @param screenY screen position Y
   * @returns {{x, y}}
   */
  screenToIso (screenX, screenY) {
    return {
      x: ((screenY - this.mapY) / this.tileHeight + (screenX - this.mapX) / this.tileWidth),
      y: ((screenY - this.mapY) / this.tileHeight - (screenX - this.mapX) / this.tileWidth)
    };
  }

  /**
   * calc integer iso position by screen position
   * @param screenX screen position X
   * @param screenY screen position Y
   * @returns {{x, y}}
   */
  screenToIsoFloor (screenX, screenY) {
    const iso = this.screenToIso(screenX, screenY);
    iso.x     = Math.floor(iso.x);
    iso.y     = Math.floor(iso.y);
    return iso;
  }
}