let video;

function setup(){
    canvas = createCanvas(640, 480,WEBGL);
    canvas.id('canvas')
    background(33);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.id("anim");

    var seriously = new Seriously();
    var source_ = seriously.source("#anim");
    var target = seriously.target('#canvas');
    var blur = seriously.effect('blur');
    // var chroma = seriously.effect('chroma');
    blur.source = source_;
    target.source = blur;
    // chroma.source = source_;
    // target.source = chroma;
    // chroma.screen = [0.3,0.3,0,1];


    seriously.go();
}