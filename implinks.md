## Face detection in fixed time intervals.

https://chat.openai.com/share/451e0f0b-2bd4-4ffc-97fc-215ff7b03cd9

## for pixels.
// https://chat.openai.com/share/2688e9d4-95bd-46a0-a2d6-c0c509c4e2f1


```JS
let lastDetectionTime = 0; // Initialize the variable to keep track of the last detection time

function draw() {
  background(142, 217, 13);
  flipCamera();

  // Check if 10 seconds (600 frames at 60fps) have passed since the last detection
  if (frameCount - lastDetectionTime >= 60) {
    if (faceapi) {
      faceapi.detect(gotFaces); // Detect faces and update landmarks

      for (let f = 0; f < detections.length; f++) {
        let points = detections[f].landmarks.positions;
        stroke(0);
        strokeWeight(10);

        // Draw facial landmarks
        for (let i = 0; i < points.length; i++) {
          point(points[i]._x, points[i]._y);
        }
      }

      // Update the last detection time
      lastDetectionTime = frameCount;
    }
}
```



## Camera code.
```JS
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
let tummy;
let initialEyeDistance;
let upper=0;
let sider = -100;
let size = 50;

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

    face = new Face();
    hair = new Hair();
    mouthVid = new Mouth();
    nose = new Nose();
    eye = new Eye();
    tummy = new Tummy()
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
    // image(capture, 0, 0, width, height);
    if (pose_){
        // Distance
        let leftEyeX = pose_.leftEye.x+upper;
        let leftEyeY = pose_.leftEye.y+sider;
        let rightEyeX = pose_.rightEye.x+upper;
        let rightEyeY = pose_.rightEye.y+sider;

        let dstnce_ = dist(leftEyeX,leftEyeY,rightEyeX,rightEyeY)

        let currentEyeDistance = dist(pose_.leftEye.x+upper, pose_.leftEye.y-sider, pose_.rightEye.x+upper, pose_.rightEye.y-sider);
        let scaleFactor = initialEyeDistance / currentEyeDistance;
        let scaledDstnce = (dstnce_ * scaleFactor);


        // Hair
        let hairX = pose_.nose.x-10+upper;
        let hairY = pose_.nose.y-180+sider;
        let hairWidth = size+50;
        let hairHeight = size;
        let hairScaling = scaledDstnce/3
        // rect(hairX, hairY, hairWidth, hairHeight);
        hair.render(hairX, hairY, hairHeight+hairScaling,hairWidth+hairScaling);

         // face

        let faceX = pose_.nose.x+upper;
        let faceY = pose_.nose.y+sider;
        let faceWidth = size;
        let faceHeight = size -10;
        let faceScaling = scaledDstnce/3
        face.render(faceX-10,faceY-200,faceWidth+faceScaling,faceHeight+faceScaling);

        // Nose
        
        let noseX = pose_.nose.x+upper;
        let noseY = pose_.nose.y+sider;
        let noseWidth = size-50;
        let noseHeight = size -50;
        let noseScaling = scaledDstnce/3

        fill(255, 43, 4);
        nose.render(noseX,noseY-120,noseWidth+noseScaling,noseHeight+noseScaling);


        // mouth
        let mouthX = pose_.nose.x+upper;
        let mouthY = pose_.nose.y+sider;
        let mouthWidth = size-35;
        let mouthHeight = size-40;
        let mouthScaling = scaledDstnce/3
        mouthVid.render(mouthX, mouthY-50,mouthWidth+mouthScaling,mouthHeight+mouthScaling);

        // Eyes

        let eyeWidth = 0;
        let eyeHeight = size-30;
        let eyeScaling = scaledDstnce/3
        eye.render(leftEyeX, leftEyeY-50, eyeHeight+eyeScaling, 0.1);
        eye.render(rightEyeX+20, rightEyeY-50, eyeHeight+eyeScaling, 0.1);


// ============================================================================================================
        // Tummy


        let leftShoulderX = pose_.leftShoulder.x;
        let leftShoulderY = pose_.leftShoulder.y;
        let rightShoulderX = pose_.rightShoulder.x;
        let rightShoulderY = pose_.rightShoulder.y;
        // fill(344);

        // ellipse(leftShoulderX, leftShoulderY, 100, 100);
        // ellipse(rightShoulderX, rightShoulderY, 100, 100);

        midX = (leftShoulderX + rightShoulderX)/2
        midY = (rightShoulderY+ leftShoulderY)/2
        // ellipse(midX,midY,200,200)

        let tummyX = midX;
        let tummyY = midY;
        let tummyWidth = size;
        let tummyHeight = size;
        let tummyScaling = scaledDstnce/3
        tummy.render(tummyX,tummyY-350,tummyWidth+tummyScaling,tummyHeight+tummyScaling);

        // Hands
        let leftElbowX = pose_.leftElbow.x;
        let leftElbowY = pose_.leftElbow.y;

        let rightElbowX = pose_.rightElbow.x;
        let rightElbowY = pose_.rightElbow.y;

        line(midX, midY-350, leftElbowX, leftElbowY)
        line(rightShoulderX, rightShoulderY-350, rightElbowX, rightElbowY)




    }
}

```



## Face code with all points commented.

```JS
// https://chat.openai.com/share/2688e9d4-95bd-46a0-a2d6-c0c509c4e2f1

let faceapi;
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
let size = 50;
let detections = [];



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

    const faceOptions = {
        withLandmarks: true,
        withExpressions: true,
        withDescriptors: true,
        minConfidence: 0.5
      };
    
      //Initialize the model
      faceapi = ml5.faceApi(capture, faceOptions, modelLoaded);
    
}

function modelLoaded(){
    console.log('Model is ready');
}


function gotFaces(error, result) {
    if (error) {
      console.log(error);
      return;
    }else{
        detections = result
        // console.log(detections);
    }

}  


function flipCamera() {
    translate(width, 0);
    scale(-1, 1);
}

// http://127.0.0.1:5500/web/captureFace.html

function draw() {
  background(142, 217, 13); 
  flipCamera();
  image(capture, 0, 0);
  if (faceapi) {
    faceapi.detect(gotFaces); // Detect faces and update landmarks

    if (detections.length > 0) {
      let points = detections[0].landmarks.positions; 
      // console.log(points);
      if (points.length >= 2) { // Check if the landmark you want to draw exists

        // I have 68 points in total.

        // Face Outline
        // for(let j=0;j<17;j++){
        //   fill(5, 1, 31);
        //   stroke(255);
        //   ellipse(points[j]._x, points[j]._y, 20, 20);
        //   if (j < 16){
        //     line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
        //   }
        // }

        // Right Eybrow
        // for(let j=17;j<22;j++){
        //   fill(5, 1, 31);
        //   stroke(255);
        //   ellipse(points[j]._x, points[j]._y, 20, 20);
        //   if (j < 16){
        //     line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
        //   }
        // }

        // Left Eyebrow

        // for(let j=22;j<27;j++){
        //   fill(5, 1, 31);
        //   stroke(255);
        //   ellipse(points[j]._x, points[j]._y, 20, 20);
        //   if (j < 16){
        //     line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
        //   }
        // }

        // Nose Upper line
        // for(let j=27;j<31;j++){
        //   fill(5, 1, 31);
        //   stroke(255);
        //   ellipse(points[j]._x, points[j]._y, 20, 20);
        //   if (j < 16){
        //     line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
        //   }
        // }

        // Nose down line
        // for(let j=31;j<36;j++){
        //   fill(5, 1, 31);
        //   stroke(255);
        //   ellipse(points[j]._x, points[j]._y, 20, 20);
        //   if (j < 16){
        //     line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
        //   }
        // }

        // Right Eye
        // for(let j=36;j<42;j++){
        //   fill(5, 1, 31);
        //   stroke(255);
        //   ellipse(points[j]._x, points[j]._y, 20, 20);
        //   if (j < 16){
        //     line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
        //   }
        // }


        // // Left Eye
        // for(let j=42;j<48;j++){
        //   fill(5, 1, 31);
        //   stroke(255);
        //   ellipse(points[j]._x, points[j]._y, 20, 20);
        //   if (j < 16){
        //     line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
        //   }
        // }

        // Upper lip
        // for(let j=48;j<55;j++){
        //   fill(5, 1, 31);
        //   stroke(255);
        //   ellipse(points[j]._x, points[j]._y, 20, 20);
        //   if (j < 16){
        //     line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
        //   }
        // }

        // Lower lip
        // for(let j=55;j<61;j++){
        //   fill(5, 1, 31);
        //   stroke(255);
        //   ellipse(points[j]._x, points[j]._y, 20, 20);
        //   if (j < 16){
        //     line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
        //   }
        // }


        // Upper middle Part  lip
        // for(let j=61;j<64;j++){
        //   fill(5, 1, 31);
        //   stroke(255);
        //   ellipse(points[j]._x, points[j]._y, 20, 20);
        //   if (j < 16){
        //     line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
        //   }
        // }

        // Lower middle Part  lip
        for(let j=64;j<68;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }
     


        stroke(0);
        strokeWeight(10);
        for(let i=0; i < points.length;i++){
          point(points[i]._x, points[i]._y); 
        }

      }
    }
  }
}

```


## Face like Animation.

```PS

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
  image(capture, 0, 0);

  if (faceapi) {
    faceapi.detect(gotFaces);

    if (detections.length > 0) {
      let points = detections[0].landmarks.positions;

      // Draw facial features

      // Draw face outline including hair
      fill(255, 204, 153); // Skin color
      beginShape();
      for (let j = 0; j < 17; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      for (let j = 26; j > 17; j--) {
        vertex(points[j]._x, points[j]._y); // Hairline
      }
      endShape(CLOSE);

      // Right eyebrow
      fill(0, 0, 0); // Black color
      beginShape();
      for (let j = 17; j < 22; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      endShape();

      // Left eyebrow
      beginShape();
      for (let j = 22; j < 27; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      endShape();

      // Draw nose upper line
      beginShape();
      for (let j = 27; j < 31; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      endShape();

      // Draw nose down line
      beginShape();
      for (let j = 31; j < 36; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      endShape();

      // Draw right eye
      fill(0, 0, 0); // Black color
      beginShape();
      for (let j = 36; j < 42; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      endShape(CLOSE);

      // Draw left eye
      beginShape();
      for (let j = 42; j < 48; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      endShape(CLOSE);

      // Draw upper lip
      fill(255, 51, 102); // Pink color
      beginShape();
      for (let j = 48; j < 55; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      endShape(CLOSE);

      // Draw lower lip
      fill(255, 51, 102); // Pink color
      beginShape();
      for (let j = 55; j < 61; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      endShape(CLOSE);

      // Draw upper middle part of the lip
      beginShape();
      for (let j = 61; j < 64; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      endShape(CLOSE);

      // Draw lower middle part of the lip
      beginShape();
      for (let j = 64; j < 68; j++) {
        vertex(points[j]._x, points[j]._y);
      }
      endShape(CLOSE);
    }
  }
}


```


## Hairs

```JS
          // Add hair in the middle
          let hairDensity = 200; // Increase this value for denser hair
          let hairHeight = 5;
          noFill();
          stroke(0); // Black color for hair
          beginShape();
          for (let i = 26; i > 17; i--) {
            let midx1 = (points[i]._x + points[i - 1]._x) / 2;
            let midy1 = (points[i]._y / headHight + points[i - 1]._y / headHight) / 2;
            let midx2 = (points[i]._x + points[i - 1]._x) / 2;
            let midy2 = (points[i]._y / headHight - points[i]._y / hairHeight + points[i - 1]._y / headHight - points[i - 1]._y / hairHeight) / 2;
      
            // Draw the hair strands using vertex
            for (let j = 0; j < hairDensity; j++) {
              let t = j / hairDensity;
              let x1 = lerp(midx1, midx2, t);
              let y1 = lerp(midy1, midy2, t);
      
              // Add random variation to hair strands
              let xOffset = random(-5, 5); // Adjust the range for randomness
              let yOffset = random(-5, 5); // Adjust the range for randomness
      
              vertex(x1 + xOffset, y1 + yOffset);
            }
          }
          endShape();   
       
```


new one.