let capture;
let vid_for_me;
let constraints = {
    video: {
      mandatory: {
        minWidth: 1280,
        minHeight: 720
      },
      optional: [{ maxFrameRate: 10 }]
    },
  //   audio: true
};
let snapeshot = [];


function setup(){
    createCanvas(1280, 720);
    pixelDensity(1)
    background(232);
    capture = createCapture(constraints, function(stream) {
    console.log(stream);
    });
    capture.hide();
    vid_for_me = createCapture(constraints, function(stream) {
        console.log(stream);
    });
    vid_for_me.size(600,400);
}


function draw(){
    background(25);
    capture.loadPixels();
    loadPixels();
    for (var y = 0;y<height;y++){
        for (var x=0;x<width;x++){
            index = (x+y*width)*4;
            pixels[index] = capture.pixels[index]; // for R
            pixels[index+1] = capture.pixels[index+1]; // for G
            pixels[index+2] = capture.pixels[index+2];; // for B
            pixels[index+3] = capture.pixels[index+3];; // for Transparency
        }
    }
    updatePixels();
}

