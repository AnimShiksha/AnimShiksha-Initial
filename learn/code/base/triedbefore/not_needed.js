
// without mask code!.
let capture;
let poseNet;
let pose_;
let skeleton;


function setup(){
    createCanvas(800, 600);
    // capture = createCapture(VIDEO);
    capture.hide(); //This is used to prevent the default display of the webcam video on the canvas, allowing you to manipulate the video feed or use it as input for other visualizations without showing the raw video on the screen.

    poseNet = ml5.poseNet(capture,modelLoaded); // The model Loaded is call back
    poseNet.on('pose',gotPose)
}

function modelLoaded(){
    console.log('Model is ready')
    print('Model is ready')
}

function gotPose(poses){
    // console.log(poses)
    if(poses.length > 0){
        pose_ = poses[0].pose;
        skeleton = poses[0].skeleton;
        // console.log(pose_)
    }
}

function flipCamera() {
    translate(width, 0);
    scale(-1, 1);
}

function draw(){
    background(255)
    flipCamera();
    image(capture, 0, 0);
    if(pose_){
        fill(232, 100,0);
        ellipse(pose_.nose.x, pose_.nose.y, 20);
        for(let i =0;i < pose_.keypoints.length;i++){
            let x =  pose_.keypoints[i].position.x;
            let y =  pose_.keypoints[i].position.y;
            strokeWeight(2)
            stroke(255)
            fill(0);
            ellipse(x,y,15,15);
        }
        for (let i =0;i<skeleton.length;i++){
            strokeWeight(3);
            stroke(0);
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            line(a.position.x, a.position.y, b.position.x, b.position.y)
        }
    }
}




//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=

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
let poseNet;
let pose_;
let skeleton;

function setup(){
    createCanvas(1280, 720);
    pixelDensity(1)
    background(232);
    capture = createCapture(constraints, function(stream) {
    // console.log(stream);
    });
    capture.hide();
    vid_for_me = createCapture(constraints, function(stream) {
        // console.log(stream);
    });
    vid_for_me.elt.style.transform = "scaleX(-1)";
    vid_for_me.size(600,400);

    poseNet = ml5.poseNet(capture,modelLoaded); // The model Loaded is call back
    poseNet.on('pose',gotPose);
}

function modelLoaded(){
    console.log('Model is ready')
    print('Model is ready')
}


function gotPose(poses){
    // console.log(poses)
    if(poses.length > 0){
        pose_ = poses[0].pose;
        skeleton = poses[0].skeleton;
        // console.log(pose_.nose.x)
    }
}


function flipCamera() {
    translate(width, 0);
    scale(-1, 1);
}

function draw(){
    background(222,323,0)
    // capture.loadPixels();
    // loadPixels();
    flipCamera();
    // image(capture, 0, 0);
    // if(pose_){
    //     var x = pose_.nose.x;
    //     var y = pose_.nose.y;

    //     index =  (x+y*width)*4;
    //     print(index)
    //     pixels[index] = 255; // for R
    //     pixels[index+1] = 255; // for G
    //     pixels[index+2] = 255; // for B
    //     pixels[index+3] = 255;; // for Transparency

    // }
    // // updatePixels();
    image(capture, 0, 0);
    if (pose_){
        fill(232, 100,0);
        // ellipse(pose_.nose.x, pose_.nose.y, 20);
        var x = pose_.nose.x;
        var y = pose_.nose.y;

        index =  (x+y*width)*4;
        print(x)
        capture.loadPixels;
        console.log(index)
        loadPixels();
        // console.log(pixels)
        // pixels[index] = 255; // for R
        // pixels[index+1] = 255; // for G
        // pixels[index+2] = 255; // for B
        // pixels[index+3] = 255;; // for Transparency
        fill(200,200,0);
        ellipse(x, y, 100, 100)
        updatePixels();


        // capture.loadPixels();
        // loadPixels();
        // for (var y = 0;y<height;y++){
        //     for (var x=0;x<width;x++){
        //         index = (x+y*width)*4;
    
        //         pixels[index] = capture.pixels[index]; // for R
        //         pixels[index+1] = capture.pixels[index+1]; // for G
        //         pixels[index+2] = capture.pixels[index+2];; // for B
        //         pixels[index+3] = capture.pixels[index+3];; // for Transparency
        //     }
        // }
        // updatePixels();
    }
    
}

//#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#= WORKING EFFECT(MANIPULATING PIXEL VALUES) #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=


function draw() {
    background(222, 323, 0);
    flipCamera();

    image(capture, 0, 0);
    if (pose_) {
        let x = floor(pose_.nose.x);
        let y = floor(pose_.nose.y);

        // Define the region around the nose where you want to apply the pixelation effect
        let left = x - pixelSize / 2;
        let right = x + pixelSize / 2;
        let top = y - pixelSize / 2;
        let bottom = y + pixelSize / 2;

        // Apply pixelation effect to the defined region
        loadPixels();
        for (let i = left; i < right; i++) {
            for (let j = top; j < bottom; j++) {
                let index = (i + j * width) * 4;
                for (let dx = 0; dx < pixelSize; dx++) {
                    for (let dy = 0; dy < pixelSize; dy++) {
                        let pixelIndex = (i + dx + (j + dy) * width) * 4;
                        pixels[pixelIndex] = pixels[index];     // Red
                        pixels[pixelIndex + 1] = pixels[index + 1]; // Green
                        pixels[pixelIndex + 2] = pixels[index + 2]; // Blue
                        pixels[pixelIndex + 3] = pixels[index + 3]; // Alpha (Transparency)
                    }
                }
            }
        }
        updatePixels();
    }
}

