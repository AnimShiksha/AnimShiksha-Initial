class GirsEyeBrow{
    constructor(){}
  
    girlsEyeBrow(eyeBrowLandmarks,eyeBrowsSize){
      let leftEyeBrow = eyeBrowLandmarks.leftEyebrowUpper
      fill(0)
      beginShape();
      for(let i of leftEyeBrow){
        // line(scalePoint(i).x, scalePoint(i).y,scalePoint(i).x, scalePoint(i).y-eyeBrowsSize)
        // vertex(scalePoint(i).x, scalePoint(i).y);
        ellipse(scalePoint(i).x, scalePoint(i).y, 2);
      }
      endShape();
    
      beginShape();
      let rightEyeBrow = eyeBrowLandmarks.rightEyebrowUpper
      fill(9)
      for(let i of rightEyeBrow){
        // line(scalePoint(i).x, scalePoint(i).y,scalePoint(i).x, scalePoint(i).y-eyeBrowsSize);
        // vertex(scalePoint(i).x, scalePoint(i).y);
        ellipse(scalePoint(i).x, scalePoint(i).y,2);
      }
      endShape();
    }
  
  }