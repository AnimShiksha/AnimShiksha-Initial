class GirlsTummy {
    constructor() {
    }

    girlTummy(pose_,tummyUP,tummyDown){

      // let tummyUP = 3
      let leftShoulder = (pose_.leftShoulder);
      let rightShoulder = (pose_.rightShoulder);
      let leftHip = (pose_.leftHip)
      let rightHip = (pose_.rightHip)

      // let midx = (leftShoulder.x + rightShoulder.x)/2
      // let midy = (leftShoulder.y + rightShoulder.y)/2

      fill(12, 105, 3); // Red color for the shirt
      beginShape();

      curveVertex(leftHip.x, leftHip.y-leftHip.y/tummyDown);
      // curveVertex(rightHip.x, rightHip.y-rightHip.y/tummyDown);
      curveVertex(rightHip.x, rightHip.y-rightHip.y/tummyDown);
      curveVertex(rightShoulder.x, rightShoulder.y-leftShoulder.y/tummyUP);
      curveVertex(leftShoulder.x, leftShoulder.y-leftShoulder.y/tummyUP);
      // curveVertex(leftShoulder.x, leftShoulder.y-leftShoulder.y/tummyUP);
      endShape(CLOSE);


    }
}
