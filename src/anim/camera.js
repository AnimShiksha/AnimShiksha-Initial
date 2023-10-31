
let video;  // webcam input
let model;  // Face Landmarks machine-learning model
let face;   // detected face
let firstFace = true;
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

let tummy;
let callback;
let pose_;

// http://127.0.0.1:5500/web/captureFace.html

function setup() {
  createCanvas(1280, 720);

  video = createCapture(constraints, function(stream) {
    // console.log(stream);
    });
  video.hide();
  vid_for_me = createCapture(constraints, function(stream) {
      // console.log(stream);
  });
  vid_for_me.elt.style.transform = "scaleX(-1)";
  vid_for_me.size(600,400);
  
  while(!tf.ready()) {}

  loadModelClass = new Loadmodels();
  callback = new ModelCallBacks()
  
  poseNet = ml5.poseNet(video,loadModelClass.poseNetmodelLoaded); 
  poseNet.on('pose',callback.gotPose);

  loadModelClass.loadFaceModel();

  tummy = new Tummy();

}



function scalePoint(pt) {
  let x = map(pt[0], 0,video.width, 0,width);
  let y = map(pt[1], 0,video.height, 0,height);
  return createVector(x, y);
}



function flipCamera() {
  translate(width, 0);
  scale(-1, 1);
}


function draw() {
  if (video.loadedmetadata && model !== undefined) {
    callback.getFace();
    if (face !== undefined) {
      flipCamera();
      image(video, 0,0, width,height);
      drawFace(face);
    }
  
    if(pose_){
      tummy.tummyAnim(pose_);
    }
  }


}



function drawFace(faceModel){
  let eye = new Eyes();
  let eyeBrow = new EyeBrow();
  let lips = new Lips()
  let nose = new Nose()

  let topLeft = scalePoint(face.boundingBox.topLeft);
  let bottomRight = scalePoint(face.boundingBox.bottomRight);
  let w = bottomRight.x - topLeft.x;
  
  bestFitSize = w/6
  faceOutline = faceModel.annotations.silhouette;

  fill(255, 204, 153); // Skin color
  // stroke(2);
  beginShape();
  for(fotl of faceOutline){
    fotl = scalePoint(fotl)
    curveVertex(fotl.x, fotl.y)
  }
  endShape(CLOSE);

  
  eyeBrow.drawEyeBrow(faceModel.annotations,bestFitSize/2.5);

  let leftEye = scalePoint(faceModel.annotations.leftEyeIris[0]);
  let rightEye = scalePoint(faceModel.annotations.rightEyeIris[0]);

  eye.drawEye(leftEye,bestFitSize,2);
  eye.drawEye(rightEye,bestFitSize,2);

  let nose_ = scalePoint(faceModel.annotations.noseTip[0]);
  nose.drawNose(nose_,bestFitSize*1.2);

  lips.drawLips(faceModel.annotations);  
}




class Loadmodels{

  async poseNetmodelLoaded() {
    console.log('Present🤚🏻(Posenet Model)');
  }

  async loadFaceModel() {
    model = await faceLandmarksDetection.load(
      faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
      
      { maxFaces: 2 }
    );
  }
}

class ModelCallBacks{    
  async  getFace() {
    const predictions = await model.estimateFaces({
      input: document.querySelector('video')
    }); 

    // Checking found face or not!
    if (predictions.length === 0) {
      face = undefined;
    }
    else {
      face = predictions[0];
    }
  }


  gotPose(poses){
    if(poses.length > 0){
        pose_ = poses[0].pose;
        // skeleton = poses[0].skeleton;
    }
  }
}




class Tummy {
  constructor() {
  }

  tummyAnim(pose_){

    let leftShoulder = pose_.leftShoulder
    let rightShoulder = pose_.rightShoulder
    let leftHip = pose_.leftHip
    let rightHip = pose_.rightHip

    let midx = (leftShoulder.x + rightShoulder.x)/2
    let midy = (leftShoulder.y + rightShoulder.y)/2

    fill(255, 0, 0); // Red color for the shirt
    beginShape();

    curveVertex(leftShoulder.x, leftShoulder.y);
    curveVertex(rightShoulder.x, rightShoulder.y);
    curveVertex(rightHip.x, rightHip.y);
    curveVertex(leftHip.x, leftHip.y);
    curveVertex(leftShoulder.x, leftShoulder.y);

    endShape(CLOSE);
  }

}