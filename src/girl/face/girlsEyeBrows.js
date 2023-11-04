class GirlsEyeBrow{
    constructor(){}
  
    girlsEyeBrow(eyeBrowLandmarks,eyeBrowsSize){
      let leftEyeBrow = eyeBrowLandmarks.leftEyebrowUpper
      noFill();
      stroke(0);
      smooth();
      strokeWeight(2);
      beginShape();
      // for(let i of leftEyeBrow){
      for(let i=0;i<leftEyeBrow.length;i++){
        // line(scalePoint(i).x, scalePoint(i).y,scalePoint(i).x, scalePoint(i).y-eyeBrowsSize)
        // Upper Hair's
        // line(scalePoint(i).x, scalePoint(i).y, scalePoint(i).x-4, scalePoint(i).y-10)
        curveVertex(scalePoint(leftEyeBrow[i]).x, scalePoint(leftEyeBrow[i]).y);
        // bezierVertex(scalePoint(i).x, scalePoint(i).y);
        // ellipse(scalePoint(leftEyeBrow[i]).x, scalePoint(leftEyeBrow[i]).y, 8);
      }
      endShape();

      // ellipse(scalePoint(leftEyeBrow[1]).x, scalePoint(leftEyeBrow[1]).y, 8);
    
      smooth();
      beginShape();
      let rightEyeBrow = eyeBrowLandmarks.rightEyebrowUpper
    //   noFill();
      for(let i of rightEyeBrow){
        // line(scalePoint(i).x, scalePoint(i).y,scalePoint(i).x, scalePoint(i).y-eyeBrowsSize);
        // line(scalePoint(i).x, scalePoint(i).y, scalePoint(i).x+4, scalePoint(i).y-10)
        curveVertex(scalePoint(i).x, scalePoint(i).y);
        // bezierVertex(scalePoint(i).x, scalePoint(i).y);
        
        // ellipse(scalePoint(i).x, scalePoint(i).y,3);
      }
      endShape();
    }
}