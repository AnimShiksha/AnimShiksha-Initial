// https://chat.openai.com/share/2688e9d4-95bd-46a0-a2d6-c0c509c4e2f1

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
let face;
let hair;
let mouthVid;
let nose;
let initialEyeDistance;
let upper=0;
let sider = -100;


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
        console.log(pose_)
        initialEyeDistance = dist(pose_.leftEye.x, pose_.leftEye.y, pose_.rightEye.x, pose_.rightEye.y);
    }
}


function flipCamera() {
    translate(width, 0);
    scale(-1, 1);
}


function draw() {
    background(222,300,12);
    flipCamera();
    // http://127.0.0.1:5500/web/animcamera.html
    image(capture, 0, 0, width, height);
    if(pose_){

        
        let leftShoulderX = pose_.leftShoulder.x;
        let leftShoulderY = pose_.leftShoulder.y;
        let rightShoulderX = pose_.rightShoulder.x;
        let rightShoulderY = pose_.rightShoulder.y;

        let leftElbowX = pose_.leftElbow.x;
        let leftElbowY = pose_.leftElbow.y;

        let rightElbowX = pose_.rightElbow.x;
        let rightElbowY = pose_.rightElbow.y;


        
        ellipse(leftShoulderX, leftShoulderY, 100, 100);
        ellipse(rightShoulderX, rightShoulderY, 100, 100);
        ellipse(leftElbowX, leftElbowY, 100, 100);
        ellipse(rightElbowX, rightElbowY, 100, 100);
        strokeWeight(5);
        line(leftShoulderX, leftShoulderY, rightShoulderX, rightShoulderY)
        line(leftShoulderX, leftShoulderY, leftElbowX, leftElbowY)
        line(rightShoulderX, rightShoulderY, rightElbowX, rightElbowY)


        // Hip
        let leftHipX = pose_.leftHip.x;
        let leftHipY = pose_.leftHip.y;
        ellipse(leftHipX, leftHipY, 100, 100);







        // fill(232, 100,0);
        // ellipse(pose_.nose.x, pose_.nose.y, 20);
        // for(let i =0;i < pose_.keypoints.length;i++){
        //     let x =  pose_.keypoints[i].position.x;
        //     let y =  pose_.keypoints[i].position.y;
        //     strokeWeight(2)
        //     stroke(255)
        //     fill(0);
        //     ellipse(x,y,15,15);
        }
        // for (let i =0;i<skeleton.length;i++){
        //     strokeWeight(3);
        //     stroke(0);
        //     let a = skeleton[i][0];
        //     let b = skeleton[i][1];
        //     line(a.position.x, a.position.y, b.position.x, b.position.y)
        // }

        // console.log()
    }


