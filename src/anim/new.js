let poseNet;
let video;
let pose_;
let poses;


function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPose);
  
    video.size(480,360);
  
}


function draw() {
    // background(23);
    image(video, 0, 0);

    if (poses) {
        for (let i = 0; i < poses.keypoints.length; i++) {
            let keypoint = poses.keypoints[i];
            if (keypoint.score > 0.2) { // Only draw keypoints with a confidence score above a threshold
                fill(255, 0, 0); // Set the fill color (red in this case)
                noStroke(); // Disable stroke (outline)
                ellipse(keypoint.position.x, keypoint.position.y, 10, 10); // Draw a circle for each keypoint
            }
        }
    }
}



function modelLoaded() {
    console.log('PoseNet Loaded!🤚🏻');
}

function gotPose(pose_){
    if(pose_.length > 0){
        poses = pose_[0].pose;
    }
}