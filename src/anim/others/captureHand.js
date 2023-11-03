
let capture;
let poseNet;
let pose_;
let vid_for_me;
let skeleton;
let size = 110;
let vScale = 100;
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


// http://127.0.0.1:5500/web/captureHand.html


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
    poseNet = ml5.poseNet(capture,Loadmodels.poseNetmodelLoaded);
    poseNet.on('pose',gotPose);
    
}

// function setup(){
//     createCanvas(1280, 720);
//     pixelDensity(1);
//     background(232);
//     capture = createCapture(constraints, function(stream) {
//     // console.log(stream);
//     });
//     capture.size(600,400);
//     // vid_for_me = createCapture(constraints, function(stream) {
//     //     // console.log(stream);
//     // });
//     // vid_for_me.elt.style.transform = "scaleX(-1)";
//     // vid_for_me.size(600,400);

//     poseNet = ml5.poseNet(capture,Loadmodels.poseNetmodelLoaded);
//     poseNet.on('pose',gotPose);
    
// }


function gotPose(poses){
    // console.log(poses)
    if(poses.length > 0){
        pose_ = poses[0].pose;
        skeleton = poses[0].skeleton;
        // console.log(skeleton)
        // console.log(pose_)
    }
}


function draw() {
    background(0,203,33);
    // image(capture, 0, 0);

    // if (pose_) {
    //     detectHands();    

    // }    

    capture.loadPixels();
    loadPixels();
    for(let y = 0;y<height;y++){
        for(let x=0;x<width;x++){
            let index = (x+y*width)*4;
            let R = capture.pixels[index+0];
            let G = capture.pixels[index+1];
            let B = capture.pixels[index+2]

            pixels[index+0] = R;
            pixels[index+1] = G;
            pixels[index+2] = B;
            pixels[index+3] = 255;
        }
    }
    updatePixels();
}



class Loadmodels{
    poseNetmodelLoaded() {
      console.log('Present🤚🏻(Posenet Model)');
    }
}


function scalePoint(pt) {
    let x = map(pt[0], 0,capture.width, 0,width);
    let y = map(pt[1], 0,capture.height, 0,height);
    return createVector(x, y);
}
  


function detectHands() {
    let leftElbowX = pose_.leftElbow.x;
    let leftElbowY = pose_.leftElbow.y;

    let rightElbowX = pose_.rightElbow.x;
    let rightElbowY = pose_.rightElbow.y;

    let rightWristX = pose_.rightWrist.x;
    let rightWristY = pose_.rightWrist.y;

    // Calculate the width and height of the hand region
    // let handWidth = rightElbowX - rightWristX;
    let handWidth = rightElbowX - rightWristX;
    let handHeight = 60; // You can adjust the height as needed

    // Get the pixel data for the hand region
    let handPixels = capture.get(rightWristX, rightWristY, handWidth, handHeight);

    // loadPixels()
    // Create a custom design for the Ben 10-like hand
    for (let x = 0; x < handPixels.width; x++) {
        for (let y = 0; y < handPixels.height; y++) {
            // Define your custom pixel design here based on (x, y) position
            let index = (x + y * handPixels.width) * 4;


            
            // Example: Create a green circle pattern
            let centerX = handPixels.width / 2;
            let centerY = handPixels.height / 2;
            let distance = dist(x, y, centerX, centerY);

            if (distance < handPixels.width / 2) {
                // Inside the circle, set pixel color
                handPixels.pixels[index] = 23; // Red channel
                handPixels.pixels[index + 1] = 55; // Green channel
                handPixels.pixels[index + 2] = 222; // Blue channel
            } else {
                // Outside the circle, make it transparent
                handPixels.pixels[index + 3] = 22; // Alpha channel
            }
        }
    }

    // Update the pixels of the capture with the modified handPixels
    capture.set(rightWristX, rightWristY, handPixels);
    // capture.updatePixels();

    // Draw the modified capture, which includes the Ben 10-like hand
    image(capture, 0, 0);

    // Draw ellipses for the elbows, lines for the arms, and ellipses for the wrists as before
    ellipse(leftElbowX, leftElbowY, size - 90, size - 90);
    ellipse(rightElbowX, rightElbowY, size - 90, size - 90);
    strokeWeight(5);
    line(leftElbowX, leftElbowY, pose_.leftWrist.x, pose_.leftWrist.y);
    line(rightElbowX, rightElbowY, rightWristX, rightWristY);
    ellipse(pose_.leftWrist.x, pose_.leftWrist.y, size - 90, size - 90);
    ellipse(rightWristX, rightWristY, size - 90, size - 90);
}


