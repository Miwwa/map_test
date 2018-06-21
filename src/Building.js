import * as PIXI from 'pixi.js';
import TweenLite from 'gsap/TweenLite';

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
    this.nightSprite.alpha   = 0;
    this.fallSprite.alpha    = 0;
    this.fallSprite.visible  = false;
    this.fallSprite.stop();
    this.rainSprite.alpha   = 0;
    this.rainSprite.visible = false;
    this.rainSprite.stop();

    this.addChild(this.daySprite);
    this.addChild(this.nightSprite);
    this.addChild(this.fallSprite);
    this.addChild(this.rainSprite);

    this.isRaining = false;

    this.nightSprite.interactive = true;
    this.nightSprite.buttonMode  = true;
    this.nightSprite.on('pointertap', this.toggleRain.bind(this));

    this.nightTween = null;
    this.rainTween  = null;
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
    if (this.nightTween)
      this.nightTween.kill();

    this.nightTween = TweenLite.to(this.nightSprite, 1, {
      alpha:   1,
      delay:   0.2,
      onStart: () => {
        this.nightSprite.visible     = true;
        this.nightSprite.interactive = true;
      }
    });
  }

  deactivate () {
    this.turnOffRain();

    if (this.nightTween)
      this.nightTween.kill();

    this.nightTween = TweenLite.to(this.nightSprite, 1, {
      alpha:      0,
      onStart:    () => {
        this.nightSprite.interactive = false;
      },
      onComplete: () => {
        this.nightSprite.visible = false;
      }
    });
  }

  turnOnRain () {
    this.isRaining = true;

    if (this.rainTween)
      this.rainTween.kill();

    this.rainTween = TweenLite.to([this.rainSprite, this.fallSprite], 1, {
      alpha:   1,
      onStart: () => {
        this.rainSprite.visible = true;
        this.fallSprite.visible = true;
        this.rainSprite.play();
        this.fallSprite.play();
      }
    });
  }

  turnOffRain () {
    this.isRaining = false;

    if (this.rainTween)
      this.rainTween.kill();

    this.rainTween = TweenLite.to([this.rainSprite, this.fallSprite], 1, {
      alpha:      0,
      onComplete: () => {
        this.rainSprite.visible = false;
        this.fallSprite.visible = false;
        this.rainSprite.stop();
        this.fallSprite.stop();
      }
    });
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
    this.rainTween.kill();
    this.fallSprite.kill();
    super.destroy();
  }
}

export default Building;