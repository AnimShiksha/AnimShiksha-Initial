class Shirt{
    constructor() {
    }

    shirtAnim(pose_){


      let leftShoulder = (pose_.leftShoulder);
      let rightShoulder = (pose_.rightShoulder);
      let leftHip = (pose_.leftHip)
      let rightHip = (pose_.rightHip)
      let shirtX = leftShoulder.x/100
      let shirtY = leftShoulder.x/20
      let midx = (leftShoulder.x + rightShoulder.x)/2
      let midy = (leftShoulder.y + rightShoulder.y)/2

      let midHipx = (leftHip.x + rightHip.x)/2
      let midHipy = (leftHip.y + rightHip.y)/2
      let coatMidX = 40

      fill(33, 16, 21); // Red color for the shirt 
      
            
    //   ellipse(leftShoulder.x+shirtX, leftShoulder.y-shirtY, 20, 20);
    //   ellipse(rightShoulder.x-shirtX, rightShoulder.y-shirtY, 20, 20);
    //   ellipse(leftHip.x+shirtX,leftHip.y-40,20)
    //   ellipse(rightHip.x-shirtX,rightHip.y-40,20)


      beginShape();
      curveVertex(leftHip.x+shirtX,leftHip.y-shirtY)
      curveVertex(rightHip.x-shirtX,rightHip.y-shirtY)
      curveVertex(rightShoulder.x-shirtX, rightShoulder.y-shirtY);
      curveVertex(leftShoulder.x+shirtX, leftShoulder.y-shirtY);
      endShape(CLOSE);


      // Coat
      // Coat left side.
      fill(21, 18, 41)
      beginShape();
      vertex(leftShoulder.x+shirtX, leftShoulder.y-shirtY);
      vertex(midx+coatMidX,midy,10)
      vertex(midHipx+coatMidX,midHipy-100)
      vertex(leftHip.x+shirtX,leftHip.y-shirtY-50)      
      endShape(CLOSE);


      // Coat Right side.
      fill(21, 18, 41)
      beginShape();
      vertex(rightShoulder.x-shirtX, rightShoulder.y-shirtY);
      vertex(midx-coatMidX,midy,10)
      vertex(midHipx-coatMidX,midHipy-100)
      vertex(rightHip.x-shirtX,rightHip.y-shirtY-50)      
      endShape(CLOSE);



      
    //   beginShape();

    //   curveVertex(leftShoulder.x, leftShoulder.y);
    //   curveVertex(rightShoulder.x, rightShoulder.y);
    //   curveVertex(rightHip.x, rightHip.y);
    //   curveVertex(leftHip.x, leftHip.y);
    //   curveVertex(leftShoulder.x, leftShoulder.y);
    //   endShape((CLOSE));


    }
}

