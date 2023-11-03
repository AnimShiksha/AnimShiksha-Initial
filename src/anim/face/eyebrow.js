class EyeBrow{
    constructor(){}
  
    drawEyeBrow(eyeBrowLandmarks,eyeBrowsSize){
      let leftEyeEyeBrow2 = eyeBrowLandmarks.leftEyeUpper2
      fill(0)
      beginShape();
      for(let i of leftEyeEyeBrow2){
        // line(scalePoint(i).x, scalePoint(i).y,scalePoint(i).x, scalePoint(i).y-eyeBrowsSize)
        vertex(scalePoint(i).x, scalePoint(i).y-eyeBrowsSize);
        // ellipse(scalePoint(i).x, scalePoint(i).y, eyeBrowsSize);
      }
      endShape();
    
      beginShape();
      let rightEyeEyeBrow2 = eyeBrowLandmarks.rightEyeUpper2
      fill(9)
      for(let i of rightEyeEyeBrow2){
        // line(scalePoint(i).x, scalePoint(i).y,scalePoint(i).x, scalePoint(i).y-eyeBrowsSize);
        vertex(scalePoint(i).x, scalePoint(i).y-eyeBrowsSize);
        // ellipse(scalePoint(i).x, scalePoint(i).y,eyeBrowsSize);
      }
      endShape();
    }
  
  }