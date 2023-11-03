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
    canvas = createCanvas(1280, 720,WEBGL);
    canvas.id('canvas')
    // pixelDensity(1)
    background(22);
    capture = createCapture(VIDEO, function(stream) {
    console.log(stream);
    });
    capture.size(640, 480);
    capture.id('anim');
    // capture.hide();

    // var seriously = new Seriously();
    // var source_ = seriously.source("#anim");
    // var target = seriously.target('#canvas');
    // var blur = seriously.effect('blur');
    // var sketch = seriously.effect('sketch');
    // var ripple = seriously.effect('ripple');
    // var split = seriously.effect('split');
    // // var chroma = seriously.effect('chroma');
    // blur.source = source_;
    // target.source = blur;
    // sketch.source = source_;
    // target.source = sketch;

    // ripple.source = source_;
    // target.target = ripple;

    // split.source = source_;
    // target.target = split;
    // seriously.go();
}

// ======================================>reflecting the frame.<======================================
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

function draw() {
    image(capture, 0, 0);
}


//======================================>======================================>======================================>======================================>

// let capture;
// let vid_for_me;
// let constraints = {
//     video: {
//       mandatory: {
//         minWidth: 1280,
//         minHeight: 720
//       },
//       optional: [{ maxFrameRate: 10 }]
//     },
//   //   audio: true
// };
// let snapeshot = [];


// function setup(){
//     canvas = createCanvas(1280, 720,WEBGL);
//     canvas.id('canvas')
//     // pixelDensity(1)
//     background(22);
//     capture = createCapture(constraints, function(stream) {
//     console.log(stream);
//     });
//     capture.size(640, 480);
//     capture.id('anim');

//     var seriously = new Seriously();
//     var source_ = seriously.source("#anim");
//     var target = seriously.target('#canvas');
//     var split = seriously.effect('split');

//     split.source = source_;
//     target.target = split;
//     seriously.go();
// }


// function draw() {
//     image(capture, 0, 0);
// }