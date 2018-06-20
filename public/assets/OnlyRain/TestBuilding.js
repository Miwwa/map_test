(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"TestBuilding_atlas_", frames: [[802,1204,800,600],[802,1806,800,600],[1604,1806,800,600],[1604,1204,800,600],[1604,0,800,600],[802,2408,800,600],[1604,602,800,600],[802,3010,800,600],[802,0,800,600],[0,2408,800,600],[802,602,800,600],[0,0,800,600],[0,3010,800,600],[0,602,800,600],[0,1204,800,600],[0,1806,800,600]]}
];


// symbols:



(lib.Fall0 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Fall1 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Fall2 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Fall3 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Fall4 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Fall5 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Fall6 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Fall7 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Rain0 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Rain1 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Rain2 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Rain3 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Rain4 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Rain5 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Rain6 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Rain7 = function() {
	this.spriteSheet = ss["TestBuilding_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Rain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Rain0();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.instance_1 = new lib.Rain1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Rain2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Rain3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Rain4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Rain5();
	this.instance_5.parent = this;

	this.instance_6 = new lib.Rain6();
	this.instance_6.parent = this;

	this.instance_7 = new lib.Rain7();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,800,600);


(lib.Fall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Fall0();
	this.instance.parent = this;

	this.instance_1 = new lib.Fall1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Fall2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.Fall3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.Fall4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.Fall5();
	this.instance_5.parent = this;

	this.instance_6 = new lib.Fall6();
	this.instance_6.parent = this;

	this.instance_7 = new lib.Fall7();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


// stage content:
(lib.TestBuilding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Fall
	this.instance = new lib.Fall();
	this.instance.parent = this;
	this.instance.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Drops
	this.instance_1 = new lib.Rain();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,299,800,601);
// library properties:
lib.properties = {
	id: 'D5FF36F731072E48A9D7AC5BAA543A5D',
	width: 800,
	height: 600,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/TestBuilding_atlas_.png?1529479650626", id:"TestBuilding_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D5FF36F731072E48A9D7AC5BAA543A5D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;