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
        for(let j=0;j<17;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }

        // Right Eybrow
        for(let j=17;j<22;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }

        // Left Eyebrow

        for(let j=22;j<27;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }

        // Nose Upper line
        for(let j=27;j<31;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }

        // Nose down line
        for(let j=31;j<36;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }

        // Right Eye
        for(let j=36;j<42;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }


        // Left Eye
        for(let j=42;j<48;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }

        // Upper lip
        for(let j=48;j<55;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }

        // Lower lip
        for(let j=55;j<61;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }


        // Upper middle Part  lip
        for(let j=61;j<64;j++){
          fill(5, 1, 31);
          stroke(255);
          ellipse(points[j]._x, points[j]._y, 20, 20);
          if (j < 16){
            line(points[j]._x, points[j]._y, points[j+1]._x, points[j+1]._y)
          }
        }

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
