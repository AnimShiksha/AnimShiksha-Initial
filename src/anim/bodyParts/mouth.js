

class Mouth {
  constructor() {
  }
  render(middleX,middleY,mouthWidth,mouthHeight){
    // background(186, 196, 10);
      strokeWeight(3);
      fill(0);
      beginShape();
      // Middle
      curveVertex(middleX, middleY);

      // Right
      curveVertex(middleX+mouthWidth, middleY);
      curveVertex(middleX, middleY+mouthHeight);
      // curveVertex(middleX, middleY);

      // Left
      curveVertex(middleX, middleY+mouthHeight);
      curveVertex(middleX-mouthWidth, middleY);
      endShape(CLOSE);
  }
  // forVidoe(middleX,middleY,mouthWidth,mouthHeight){
  //   triangle(middleX, middleY, middleX+10, middleY+10, middleX+10, middleY+10);  
  // }
}

