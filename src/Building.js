import * as PIXI from 'pixi.js';

const animations = {
  'Day':   0,
  'Night': 9,
  'Fall':  [1, 2, 3, 4, 5, 6, 7, 8],
  'Rain':  [10, 11, 12, 13, 14, 15, 16, 17]
};

class Building extends PIXI.Container {
  constructor (...args) {
    super(...args);

    let fallFrames = animations.Fall.map(frameIndex => PIXI.Texture.fromFrame(`building_${frameIndex}.png`));
    let rainFrames = animations.Rain.map(frameIndex => PIXI.Texture.fromFrame(`building_${frameIndex}.png`));

    this.daySprite   = this._getSprite(`building_${animations.Day}.png`);
    this.nightSprite = this._getSprite(`building_${animations.Night}.png`);
    this.fallSprite  = this._getAnimation(fallFrames);
    this.rainSprite  = this._getAnimation(rainFrames);

    this.nightSprite.visible = false;
    this.fallSprite.stop();
    this.fallSprite.visible = false;
    this.rainSprite.stop();
    this.rainSprite.visible = false;

    this.addChild(this.daySprite);
    this.addChild(this.nightSprite);
    this.addChild(this.fallSprite);
    this.addChild(this.rainSprite);

    this.isRaining = false;

    this.nightSprite.interactive = true;
    this.nightSprite.buttonMode  = true;
    this.nightSprite.on('pointertap', this.toggleRain.bind(this));
  }

  _getSprite (frameName) {
    let sprite = PIXI.Sprite.fromFrame(frameName);
    sprite.anchor.set(0.5, 1);
    return sprite;
  }

  _getAnimation (frames) {
    let sprite = new PIXI.extras.AnimatedSprite(frames);
    sprite.anchor.set(0.5, 1);
    sprite.animationSpeed = 0.4;
    return sprite;
  }

  activate () {
    this.nightSprite.visible = true;
  }

  deactivate () {
    this.nightSprite.visible = false;
    this.turnOffRain();
  }

  turnOnRain () {
    if (!this.isRaining) {
      this.isRaining = true;

      this.fallSprite.visible = true;
      this.rainSprite.visible = true;
      this.fallSprite.play();
      this.rainSprite.play();
    }
  }

  turnOffRain () {
    if (this.isRaining) {
      this.isRaining = false;

      this.fallSprite.visible = false;
      this.rainSprite.visible = false;
      this.fallSprite.stop();
      this.rainSprite.stop();
    }
  }

  toggleRain () {
    if (this.isRaining)
      this.turnOffRain();
    else
      this.turnOnRain();
  }

  destroy () {
    this.nightSprite.destroy();
    this.daySprite.destroy();
    this.fallSprite.destroy();
    super.destroy();
  }
}

export default Building;