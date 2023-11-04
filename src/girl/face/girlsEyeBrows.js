class GirlsEyeBrow{
    constructor(){}
  
    girlsEyeBrow(eyeBrowLandmarks,eyeBrowsSize){
      let leftEyeBrow = eyeBrowLandmarks.leftEyebrowUpper
      noFill();
      stroke(0);
      strokeWeight(4);
      beginShape();
      for(let i of leftEyeBrow){
        // line(scalePoint(i).x, scalePoint(i).y,scalePoint(i).x, scalePoint(i).y-eyeBrowsSize)
        // Upper Hair's
        // line(scalePoint(i).x, scalePoint(i).y, scalePoint(i).x-4, scalePoint(i).y-10)
        vertex(scalePoint(i).x, scalePoint(i).y);
        bezierVertex(scalePoint(i).x, scalePoint(i).y);
        // ellipse(scalePoint(i).x, scalePoint(i).y, 3);
      }
      endShape();
    
      beginShape();
      let rightEyeBrow = eyeBrowLandmarks.rightEyebrowUpper
    //   noFill();
      for(let i of rightEyeBrow){
        // line(scalePoint(i).x, scalePoint(i).y,scalePoint(i).x, scalePoint(i).y-eyeBrowsSize);
        // line(scalePoint(i).x, scalePoint(i).y, scalePoint(i).x+4, scalePoint(i).y-10)
        vertex(scalePoint(i).x, scalePoint(i).y);
        bezierVertex(scalePoint(i).x, scalePoint(i).y);
        
        // ellipse(scalePoint(i).x, scalePoint(i).y,3);
      }
      endShape();
    }
  
}