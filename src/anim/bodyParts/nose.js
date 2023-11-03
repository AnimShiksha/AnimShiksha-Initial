
class Nose {
  constructor() {

  }
    render (middleX,middleY,noseHeight,noseWidth){
        stroke(43);
        strokeWeight(3);
        fill(244);
        beginShape(POINTS);
        beginShape();
        curveVertex(middleX, middleY);
        curveVertex(middleX+noseWidth, middleY+noseHeight);
        curveVertex(middleX, middleY+noseHeight);
        curveVertex(middleX, middleY);

        endShape(CLOSE);
  }
}
