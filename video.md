```JS

// https://chat.openai.com/share/2688e9d4-95bd-46a0-a2d6-c0c509c4e2f1

let capture;
let vid_for_me;
let poseNet;
let pose_;
let skeleton;
let face;
let hair;
let mouthVid;
let nose;
let tummy;
// let hairDistx = 900;
// let hairDisty = 0;
let size = 110;
let faceapi;
let detections = [];
// let faceAnimDraw;

function setup(){
    createCanvas(3600,2800,WEBGL);
    background(255);

    const faceOptions = {
        withLandmarks: true,
        withExpressions: true,
        withDescriptors: true,
        minConfidence: 0.5
      };


    capture = createVideo('video.mp4',onVideoLoaded);
    poseNet = ml5.poseNet(capture,modelLoaded); // The model Loaded is call back
    faceapi = ml5.faceApi(capture, faceOptions, modelLoaded);
    poseNet.on('pose',gotPose);

    face = new Face();
    hair = new Hair();
    mouthVid = new Mouth();
    nose = new Nose();
    eye = new Eye();
    tummy = new Tummy();
    // faceAnimDraw = new 
}

function modelLoaded(){
    console.log('Model is ready')
    print('Model is ready')
}

function gotFaces(error, result) {
    if (error) {
      console.log(error);
      return;
    } else {
      detections = result;
    }
}

function onVideoLoaded() {
    capture.loop();
}
  
function onVidForMeLoaded() {
    vid_for_me.loop();
}

function gotPose(poses){
    if(poses.length > 0){
        pose_ = poses[0].pose;
        skeleton = poses[0].skeleton;
        // console.log(pose_)
        initialEyeDistance = dist(pose_.leftEye.x, pose_.leftEye.y, pose_.rightEye.x, pose_.rightEye.y);
    }
}


function draw() {
    background(222);


    if (pose_){

         if (faceapi) {
            faceapi.detect(gotFaces);
            face.faceAnim(detections);
        }
        /*
        let leftEyeX = pose_.leftEye.x;
        let leftEyeY = pose_.leftEye.y;
        let rightEyeX = pose_.rightEye.x;
        let rightEyeY = pose_.rightEye.y;
        let currentEyeDistance = dist(leftEyeX,leftEyeY,rightEyeX,rightEyeY)

        // let currentEyeDistance = dist(pose_.leftEye.x, pose_.leftEye.y, pose_.rightEye.x, pose_.rightEye.y);
        let scaleFactor = initialEyeDistance / currentEyeDistance;
        let scaledDstnce = (currentEyeDistance * scaleFactor);

    // http://127.0.0.1:5500/web/animvideo.html
        
        fill(255, 0, 0); // Red
        noseX = pose_.nose.x;
        noseY = pose_.nose.y;
        // Hair
        let hairX = noseX;
        let hairY = noseY-20;
        let hairWidth = size-85;
        let hairHeight = size-85;
        // let hairScaling = scaleFactor
        let hairScaling = scaledDstnce/3
        // rect(hairX, hairY, hairWidth, hairHeight);
        hair.render(hairX, hairY, hairHeight+hairScaling,hairWidth+hairScaling);


        // Face
        // fill('');        
        fill(0, 255, 0); // Green
        let faceX = noseX;
        let faceY = noseY+10;
        let faceWidth = size-50;
        let faceHeight = size -50;
        let faceScaling = scaledDstnce/2
        // face.render(faceX,faceY,faceWidth+faceScaling,faceHeight+faceScaling);
        ellipse(faceX,faceY,faceWidth+faceScaling,faceHeight+faceScaling);


        // Eyes
        // fill(255)
        fill(255); // White
        let eyeSize = size-90;
        let eyeScaling = scaledDstnce/3
        // eye.render(leftEyeX, leftEyeY, eyeSize+eyeScaling,1);
        // eye.render(rightEyeX, rightEyeY, eyeSize+eyeScaling,1);
        ellipse(leftEyeX+7, leftEyeY-10, eyeSize+eyeScaling, eyeSize+eyeScaling);
        ellipse(rightEyeX-7, rightEyeY-10, eyeSize+eyeScaling, eyeSize+eyeScaling);

        // Doraemon's pupils
        // fill(0);
        fill(0); // Black
        let eyePupilsSize = size-105;
        ellipse(leftEyeX+7, leftEyeY-10, eyePupilsSize+eyeScaling, eyePupilsSize+eyeScaling);
        ellipse(rightEyeX-7, rightEyeY-10, eyePupilsSize+eyeScaling, eyePupilsSize+eyeScaling);

        

        // Nose
        // let noseX = noseX;
        // let noseY = noseY;
        let noseWidth = size-110;
        let noseHeight = size-110;
        let noseScaling = scaledDstnce/3
        // strokeJoin(ROUND);
        // ellipse(noseX, noseY, noseWidth+scaledDstnce,noseHeight+scaledDstnce);
        // fill(255)
        // ellipse(noseX,noseY, noseWidth+scaledDstnce-5, noseHeight+scaledDstnce-5);
        // fill(2,33,444);
        stroke(0);
        ellipse(noseX, noseY, noseWidth+scaledDstnce,noseHeight+scaledDstnce);
        // // let mouthScaling = scaledDstnce/4
        // mouthVid.render(mouthX, mouthY,mouthWidth,mouthHeight);

        // Mouth
        let mouthX = noseX;
        let mouthY = noseY;
        let mouthWidth = size-90;
        let mouthHeight = size-100;
        // strokeJoin(ROUND);
        // fill(232,33,2)
        // ellipse(mouthX, mouthY+15, mouthWidth,mouthHeight);

        fill(24, 19, 0);
        // stroke(3);
        arc(mouthX, mouthY+15, mouthWidth,mouthHeight, 0, PI);
        // fill(255)
        // ellipse(mouthX,mouthY, mouthWidth-5, mouthHeight-5);
        // */

        

        let leftShoulderX = pose_.leftShoulder.x;
        let leftShoulderY = pose_.leftShoulder.y;
        let rightShoulderX = pose_.rightShoulder.x;
        let rightShoulderY = pose_.rightShoulder.y;

        // Hip
        let leftHipX = pose_.leftHip.x;
        let leftHipY = pose_.leftHip.y;
        let rightHipX = pose_.rightHip.x;
        let rightHipY = pose_.rightHip.y;

        fill(23);
        ellipse(leftShoulderX, leftShoulderY, size-90, size-90);
        ellipse(rightShoulderX, rightShoulderY, size-90, size-90);

        stroke(0);
        // strokeWeight(3)
        fill(24, 19, 18);
        beginShape();

        curveVertex(leftShoulderX, leftShoulderY);
        curveVertex(leftShoulderX, leftShoulderY);
        curveVertex(rightShoulderX, rightShoulderY);
        curveVertex(rightShoulderX, rightShoulderY);
        curveVertex(rightShoulderX, rightShoulderY);
        curveVertex(rightHipX, rightHipY);
        curveVertex(rightHipX, rightHipY);
        curveVertex(leftHipX, leftHipY);
        curveVertex(leftShoulderX, leftShoulderY);

        endShape(CLOSE);

        // fill(24, 19, 0);
        // hands
        let leftElbowX = pose_.leftElbow.x;
        let leftElbowY = pose_.leftElbow.y;

        let rightElbowX = pose_.rightElbow.x;
        let rightElbowY = pose_.rightElbow.y;
        fill(0)
        ellipse(leftElbowX, leftElbowY, size-90, size-90);
        ellipse(rightElbowX, rightElbowY, size-90, size-90);

        // stroke(23);
        // strokeWeight(5);
        line(leftShoulderX, leftShoulderY, leftElbowX, leftElbowY)
        line(rightShoulderX, rightShoulderY, rightElbowX, rightElbowY)

        let leftKneeX = pose_.leftKnee.x;
        let leftKneeY = pose_.leftKnee.y;

        let rightKneeX = pose_.rightKnee.x;
        let rightKneeY = pose_.rightKnee.y;

        ellipse(leftKneeX,leftKneeY,size-90,size-90);
        ellipse(rightKneeX,rightKneeY,size-90,size-90);


        let leftWristX = pose_.leftWrist.x;
        let leftWristY = pose_.leftWrist.y;
        
        let rightWristX = pose_.rightWrist.x;
        let rightWristY = pose_.rightWrist.y;

        ellipse(leftWristX,leftWristY,size-90,size-90);
        ellipse(rightWristX,rightWristY,size-90,size-90);
        stroke(31);
        // strokeWeight(5);
        line(leftElbowX,leftElbowY,leftWristX,leftWristY);
        line(rightElbowX,rightElbowY,rightWristX,rightWristY);   

        // Legs
        line(leftHipX,leftHipY,leftKneeX,leftKneeY);
        line(rightHipX,rightHipY,rightKneeX,rightKneeY);
        

        // ANkle

        let leftAnkleX = pose_.leftAnkle.x;
        let leftAnkleY = pose_.leftAnkle.y;
        
        let rightAnkleX = pose_.rightAnkle.x;
        let rightAnkleY = pose_.rightAnkle.y;

        fill(31, 196, 172)
        ellipse(leftAnkleX,leftAnkleY,size-90,size-90);
        ellipse(rightAnkleX,rightAnkleY,size-90,size-90);

        // Legs Last Part.
        line(leftKneeX,leftKneeY,leftAnkleX,leftAnkleY);
        line(rightKneeX,rightKneeY,rightAnkleX,rightAnkleY);



        

        // ellipse(leftHipX, leftHipY, 10, 10);
        // ellipse(rightHipX, rightHipY, 10, 10);



        // fill(232, 100,0);
        // ellipse(pose_.nose.x, pose_.nose.y, 20);
        // for(let i =0;i < pose_.keypoints.length;i++){
        //     let x =  pose_.keypoints[i].position.x;
        //     let y =  pose_.keypoints[i].position.y;
        //     strokeWeight(2)
        //     stroke(255)
        //     fill(0);
        //     ellipse(x,y,15,15);
        // }
        
        // for (let i =0;i<skeleton.length;i++){
        //     strokeWeight(3);
        //     stroke(0);
        //     let a = skeleton[i][0];
        //     let b = skeleton[i][1];
        //     line(a.position.x, a.position.y, b.position.x, b.position.y)
        // }
    }

}


```

![new](image-3.png)