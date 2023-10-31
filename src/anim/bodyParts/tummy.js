
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
  