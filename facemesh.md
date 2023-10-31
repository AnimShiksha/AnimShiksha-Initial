```JS
let faceapi;
let capture;
let constraints = {
  video: {
    mandatory: {
      minWidth: 1280,
      minHeight: 720
    },
    optional: [{ maxFrameRate: 10 }]
  },
};

let detections = [];
let backgroundImage;


function setup() {
  createCanvas(1280, 720);
  pixelDensity(1);
  background(232);
  capture = createCapture(constraints, function (stream) {});
  capture.hide();

  const faceOptions = {
    withLandmarks: true,
    withExpressions: true,
    withDescriptors: true,
    minConfidence: 0.5
  };
  createCapture(constraints).size(600,400);
  backgroundImage = loadImage('moon.avif');


  // Initialize the model
  faceapi = ml5.faceApi(capture, faceOptions, modelLoaded);
}

function modelLoaded() {
  console.log('Model is ready');
}

function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  } else {
    detections = result;
  }
}

function flipCamera() {
  translate(width, 0);
  scale(-1, 1);
}


function draw() {
  background(142, 217, 13);
  flipCamera();
  // background(backgroundImage, 0, 0);
  image(capture, 0, 0);

  if (faceapi) {
    faceapi.detect(gotFaces);
    faceAnim(detections)
  }
}


function faceAnim(detectionsArry){
  
  if (detectionsArry.length > 0) {
    let points = detectionsArry[0].landmarks.positions;
        // Draw facial features
      
  }
}


```


# FAceMesh asnyc code.

```JS


function draw() {
  // This shows that both are working fine.
  if (video.loadedmetadata && model !== undefined) {
    getFace();
  }

  if (face !== undefined) {
    image(video, 0,0, width,height);

    if (firstFace) {
      console.log(face);
      noLoop();
      firstFace = false;
    }


    fill(255);
    noStroke();
    for (let pt of face.scaledMesh) {
      pt = scalePoint(pt);
      circle(pt.x, pt.y, 3);
    }


    // silhouette
    fill(0,150,255, 100);
    noStroke();
    beginShape();
    for (pt of face.annotations.silhouette) {
      pt = scalePoint(pt);
      vertex(pt.x, pt.y);
    }
    endShape(CLOSE);


    let leftEye =  scalePoint(face.annotations.leftEyeIris[0]);
    let rightEye = scalePoint(face.annotations.rightEyeIris[0]);

    // then use the face's overall bounding box to scale them
    let topLeft =   scalePoint(face.boundingBox.topLeft);
    let bottomRight = scalePoint(face.boundingBox.bottomRight);
    let w = bottomRight.x - topLeft.x;
    let dia = w / 6;

    fill(255);
    noStroke();
    circle(leftEye.x,  leftEye.y,  dia);
    circle(rightEye.x, rightEye.y, dia);


    let mouth = [];
    for (let pt of face.annotations.lipsUpperInner) {
      pt = scalePoint(pt);
      mouth.push(pt);
    }
    for (let pt of face.annotations.lipsLowerInner) {
      pt = scalePoint(pt);
      mouth.push(pt);
    }

    fill(50,0,0);
    noStroke();
    beginShape();
    for (let pt of mouth) {
      vertex(pt.x, pt.y);
    }
    endShape(CLOSE);

    let nose = scalePoint(face.scaledMesh[5]);
    for (let d=w/6; d>=2; d-=1) {
      fill(255,150,0, map(d, w/6,2, 0,255));
      noStroke();
      circle(nose.x, nose.y, d);
    }
  }
}


```


## Best working code.

``` JS

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








```