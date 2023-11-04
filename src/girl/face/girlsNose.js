class GirlsNose {
    constructor() {}
  
    girlNose(Landmarks,noseSize,noseRingSize) {
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
      ellipse(scaleLeftCorner.x+noseSize, scaleLeftCorner.y+noseSize,noseRingSize);
      
      
      fill(19, 1, 54);
      beginShape();
      curveVertex(scaleLeftCorner.x+noseSize, scaleLeftCorner.y+noseSize);
      curveVertex(scaleTip.x+noseSize, scaleTip.y+noseSize);
      curveVertex(scaleRightCorner.x+noseSize, scaleRightCorner.y+noseSize);
      curveVertex(scaleBottom.x+noseSize, scaleBottom.y+noseSize);
      curveVertex(scaleLeftCorner.x+noseSize, scaleLeftCorner.y+noseSize);
      endShape(CLOSE);

    }    
}
  