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

  loadFaceModel();

}

// This `async` keyword is used to wait for the proccess and do another process.
async function loadFaceModel() {
  model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
    
    { maxFaces: 2 }
  );
}


function scalePoint(pt) {
  let x = map(pt[0], 0,video.width, 0,width);
  let y = map(pt[1], 0,video.height, 0,height);
  return createVector(x, y);
}


async function getFace() {
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

function flipCamera() {
  translate(width, 0);
  scale(-1, 1);
}


function draw() {
  // This shows that both are working fine.
  if (video.loadedmetadata && model !== undefined) {
    getFace();
  }

  if (face !== undefined) {
    flipCamera();
    image(video, 0,0, width,height);
    // console.log(face);
    // noLoop();
    drawFace(face);

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

  eye.drawEye(leftEye,bestFitSize,0);
  eye.drawEye(rightEye,bestFitSize,0);

  let nose_ = scalePoint(faceModel.annotations.noseTip[0]);
  nose.drawNose(nose_,bestFitSize*1.2);

  lips.drawLips(faceModel.annotations);  
}




