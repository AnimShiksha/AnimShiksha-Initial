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


      noFill();
      stroke(16, 3, 36);
      strokeWeight(2);
      ellipse(scaleLeftCorner.x, scaleLeftCorner.y, 30, 30);


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
  