let facemesh;
let poseNet;
let video;
let predictions = [];
let girlsface_;
let drawbody_;
let girlsBody_;
let pose_;
let poses;
let backgroundIMG;
let hairIMG_;

function setup() {
  createCanvas(1280, 720);
  video = createCapture(VIDEO);

  facemesh = ml5.facemesh(video, modelReady);
  facemesh.on("predict", results => {
    predictions = results;
  });
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPose);

  hairIMG_ = loadImage('artifacts/girlHairs.jpg',imageLoaded);

  // video.size(480,360);

  girlsface_ = new GirlsFace();
  girlsBody_ = new GirlsBody();

}


function gotPose(pose_){
  if(pose_.length > 0){
      poses = pose_[0].pose;
  }
}


function modelLoaded() {
  console.log('PoseNet Loaded!🤚🏻');
}


function imageLoaded() {
  console.log('Image Loaded!🤚🏻');
}



function modelReady() {
  console.log("FaceMesh Ready!🤚🏻");
}

function draw() {
  background(242, 211, 10);
  if(predictions.length){
      // Hair Image is Not Working.
      let hairPoints = predictions[0].annotations.silhouette[32]
      image(hairIMG_, scalePoint(hairPoints).x, scalePoint(hairPoints).y, 250, 250)
    if(poses){
      drawNeck()
     }
    girlsface_.girlsFace(predictions[0]);

  }
  if(poses){
    girlsBody_.girlsBody(poses);
  }
}



function drawNeck(){
  let points = predictions[0].annotations.silhouette

  let neckUp = points[15];
  let neckDown = points[21];

  let leftShoulder = (poses.leftShoulder);
  let rightShoulder = (poses.rightShoulder);
  let leftHip = (poses.leftHip)
  let rightHip = (poses.rightHip)

  let midx = (leftShoulder.x + rightShoulder.x)/2
  let midy = (leftShoulder.y + rightShoulder.y)/2

  fill(77, 10, 27); // Skin color
  stroke(2);
  strokeWeight(2);
  beginShape();
  curveVertex(scalePoint(neckUp).x,scalePoint(neckUp).y);
  curveVertex(scalePoint(neckDown).x,scalePoint(neckDown).y);
  curveVertex(rightShoulder.x, rightShoulder.y);
  // curveVertex(rightHip.x, rightHip.y);
  // curveVertex(leftHip.x, leftHip.y);
  curveVertex(leftShoulder.x, leftShoulder.y);
  curveVertex(scalePoint(neckUp).x,scalePoint(neckUp).y);
  endShape(CLOSE);

}



function scalePoint(pt) {
  // let x = map(pt[0], 0,video.width, 0,width);
  // let y = map(pt[1], 0,video.height, 0,height);
  let x= pt[0]
  let y = pt[1]
  return createVector(x, y);
}

