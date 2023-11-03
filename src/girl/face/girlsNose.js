class GirlsNose {
    constructor() {}
  
    girlNose(Landmarks) {
      let tipNose = Landmarks.noseTip[0];
      let leftNoseCorner = Landmarks.noseLeftCorner[0];
      let rightNoseCorner = Landmarks.noseRightCorner[0];
      let bottomNose = Landmarks.noseBottom[0];
  
      let scaleTip = scalePoint(tipNose);
      let scaleLeftCorner = scalePoint(leftNoseCorner);
      let scaleRightCorner = scalePoint(rightNoseCorner);
      let scaleBottom = scalePoint(bottomNose);
  

    //   // Draw the tip of the nose
    //   ellipse(scaleTip.x, scaleTip.y, 10);
  
    //   // Draw the nostrils
    //   ellipse(scaleLeftCorner.x, scaleLeftCorner.y, 5);
    //   ellipse(scaleRightCorner.x, scaleRightCorner.y, 5);
  
    //   // Draw the bridge of the nose
    //   beginShape();
    //   vertex(scaleLeftCorner.x, scaleLeftCorner.y);
    //   vertex(scaleRightCorner.x, scaleRightCorner.y);
    //   vertex(scaleTip.x, scaleTip.y);
    //   endShape(CLOSE);
  
    //   // Draw the base of the nose
    //   beginShape();
    //   vertex(scaleLeftCorner.x, scaleLeftCorner.y);
    //   vertex(scaleBottom.x, scaleBottom.y);
    //   vertex(scaleRightCorner.x, scaleRightCorner.y);
    //   endShape(CLOSE);


      fill(19, 1, 54);
      beginShape();
      curveVertex(scaleLeftCorner.x, scaleLeftCorner.y);
      curveVertex(scaleTip.x, scaleTip.y);
      curveVertex(scaleRightCorner.x, scaleRightCorner.y);
      curveVertex(scaleBottom.x, scaleBottom.y);
      curveVertex(scaleLeftCorner.x, scaleLeftCorner.y);

      endShape(CLOSE);
    }
  }
  