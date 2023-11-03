// let capture;
// let poseNet;
// let pose;
// let skeleton;
// let mask;

// function setup() {
//     createCanvas(1280, 720);
//     let constraints = {
//       video: {
//         mandatory: {
//           minWidth: 1280,
//           minHeight: 720
//         },
//         optional: [{ maxFrameRate: 10 }]
//       },
//       audio: true
//     };
    
//     capture = createCapture(constraints, function(stream) {
//       console.log(stream);
//     });
    
//     poseNet = ml5.poseNet(capture, modelLoaded);
//     poseNet.on('pose', gotPose);
    
//     mask = createGraphics(width, height);
// }

// function modelLoaded() {
//     console.log('Model is ready');
//     print('Model is ready');
// }

// function gotPose(poses) {
//     if (poses.length > 0) {
//         pose = poses[0].pose;
//         skeleton = poses[0].skeleton;

//         // Create a mask of the person
//         mask.clear();
//         mask.fill(0);
//         mask.ellipse(pose.nose.x, pose.nose.y, 200, 200);
//         mask.stroke(0);
//         mask.strokeWeight(3);
//         for (let i = 0; i < pose.keypoints.length; i++) {
//         mask.ellipse(pose.keypoints[i].position.x, pose.keypoints[i].position.y, 15, 15);
//         }
//     }
// }

// function flipCamera() {
//     translate(width, 0);
//     scale(-1, 1);
// }

// function draw() {
//     background(255);
//     flipCamera();
//     image(capture,0,0);
//     // Apply the mask to the webcam video feed
//     image(capture, 0, 0, mask);

//     if (pose) {
//         fill(232, 100, 0);
//         ellipse(pose.nose.x, pose.nose.y, 20);

//         for (let i = 0; i < pose.keypoints.length; i++) {
//         let x = pose.keypoints[i].position.x;
//         let y = pose.keypoints[i].position.y;
//         strokeWeight(2);
//         stroke(255);
//         fill(0);
//         ellipse(x, y, 15, 15);
//         }

//         for (let i = 0; i < skeleton.length; i++) {
//         strokeWeight(3);
//         stroke(0);
//         let a = skeleton[i][0];
//         let b = skeleton[i][1];
//         line(a.position.x, b.position.y, b.position.x, b.position.y);
//         }
//     }
// }

// =====================================================================================================

let capture;
let poseNet;
let pose;
let skeleton;
let mask;

function setup() {
    createCanvas(1280, 720);
    // let constraints = {
    //   video: {
    //     mandatory: {
    //       minWidth: 1280,
    //       minHeight: 720
    //     },
    //     optional: [{ maxFrameRate: 10 }]
    //   },
    //   audio: true
    // };
    // capture = createCapture(constraints, function(stream) {
    //   console.log(stream);
    // });

    // vid_for_me = createCapture(constraints, function(stream) {
    //     console.log(stream);
    //   });

    capture = createCapture(VIDEO);
    // capture.hide();

    poseNet = ml5.poseNet(capture, modelLoaded);
    poseNet.on('pose', gotPose);
    mask = createGraphics(width, height);
}

function modelLoaded() {
    console.log('Model is ready');
    print('Model is ready');
}

function gotPose(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;

        // Create a mask of the person
        mask.clear();
        mask.fill(0);
        mask.ellipse(pose.nose.x, pose.nose.y, 200, 200);
        mask.stroke(0);
        mask.strokeWeight(3);
        for (let i = 0; i < pose.keypoints.length; i++) {
        mask.ellipse(pose.keypoints[i].position.x, pose.keypoints[i].position.y, 15, 15);
        }
    }
}

function flipCamera() {
    translate(width, 0);
    scale(-1, 1);
}

function draw() {
    background(255);
    flipCamera();

    // Apply the mask to the webcam video feed
    image(capture, 0, 0, mask);

    if (pose) {
        fill(232, 100, 0);
        ellipse(pose.nose.x, pose.nose.y, 20);

        for (let i = 0; i < pose.keypoints.length; i++) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        strokeWeight(2);
        stroke(255);
        fill(0);
        ellipse(x, y, 15, 15);
        }

        for (let i = 0; i < skeleton.length; i++) {
        strokeWeight(3);
        stroke(0);
        let a = skeleton[i][0];
        let b = skeleton[i][1];
        line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
    }
}
