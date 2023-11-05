
class Tummy {
    constructor() {
    }

    tummyAnim(pose_,tummyUP,tummyDown){

      // let tummyUP = 3
      let leftShoulder = (pose_.leftShoulder);
      let rightShoulder = (pose_.rightShoulder);
      let leftHip = (pose_.leftHip)
      let rightHip = (pose_.rightHip)

      // let midx = (leftShoulder.x + rightShoulder.x)/2
      // let midy = (leftShoulder.y + rightShoulder.y)/2

      stroke(0);
      strokeWeight(3);
      fill(12, 105, 3); // Red color for the shirt           

      
      beginShape();

      // curveVertex(leftShoulder.x, leftShoulder.y);
      // curveVertex(rightShoulder.x, rightShoulder.y);
      // curveVertex(rightHip.x, rightHip.y);
      // curveVertex(leftHip.x, leftHip.y);
      // curveVertex(leftShoulder.x, leftShoulder.y);


      curveVertex(leftHip.x, leftHip.y-leftHip.y/tummyDown);
      // curveVertex(rightHip.x, rightHip.y-rightHip.y/tummyDown);
      curveVertex(rightHip.x, rightHip.y-rightHip.y/tummyDown);
      curveVertex(rightShoulder.x, rightShoulder.y-leftShoulder.y/tummyUP);
      curveVertex(leftShoulder.x, leftShoulder.y-leftShoulder.y/tummyUP);
      // curveVertex(leftShoulder.x, leftShoulder.y-leftShoulder.y/tummyUP);
      endShape(CLOSE);


      // Button
      // let buttons = 10
      // let buttondist = -60
      // fill(0);
      // ellipse(midx, midy+buttondist, 20,20);
      // fill(255);
      // ellipse(midx, midy+buttondist, 10,10);
      // let buttons = 10
      // let buttondist = 200
      // for(let i = 0;i<buttons;i++ ){
      //   let midx = (leftShoulder.x + rightShoulder.x)/2
      //   let midy = (leftShoulder.y + rightShoulder.y+buttondist)/2
      //   fill(0);
      //   ellipse(midx, midy, 20,20);
      //   fill(255);
      //   ellipse(midx, midy, 10,10);
      //   buttondist+=midx/15;

      // }


      
    // BUTTONS
    // let numButtons = 50; // You can change the number of buttons
    // let buttonSpacing = 20; // Adjust the button spacing as needed

    // for (let i = 0; i < numButtons; i++) {
    //   let buttonY = leftShoulder.y - shirtY/2 + (i * buttonSpacing) ;

    //   fill(0);
    //   ellipse(midx, buttonY, 20, 20);
    //   fill(255);
    //   ellipse(midx, buttonY, 10, 10);
    // }
    }
}


// function scalePointTummy(pt) {
//   let x = map(pt[0],pt[0],pt[0]+20,pt[0]+30,pt[0]+40);
//   let y = map(pt[1],pt[1],pt[1]+20,pt[1]+30,pt[3]+40);
//   // let x= pt[0]
//   // let y = pt[1]
//   return createVector(x, y);
// }

  