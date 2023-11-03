
// without mask code!.
let capture;
let poseNet;
let pose_;
let skeleton;
let vid_for_me;

function setup(){
    createCanvas(1280, 720);
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
    capture = createCapture(constraints, function(stream) {
      console.log(stream);
    });

    vid_for_me = createCapture(constraints, function(stream) {
        console.log(stream);
      });
    // capture = createCapture(VIDEO);
    // capture.hide(); //This is used to prevent the default display of the webcam video on the canvas, allowing you to manipulate the video feed or use it as input for other visualizations without showing the raw video on the screen.
    // capture.size(320, 240);
    
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
    // filter(INVERT);
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

