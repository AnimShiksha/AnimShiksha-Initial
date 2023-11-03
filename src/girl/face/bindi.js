class Bindi{
    constructor(){}

    girlBindi(bindiLandmarks){
        let landmark = bindiLandmarks.midwayBetweenEyes;

        stroke(186, 9, 18);
        strokeWeight(7);
        beginShape();
        for(let i of landmark){
          // line(scalePoint(i).x, scalePoint(i).y,scalePoint(i).x, scalePoint(i).y-eyeBrowsSize)
          // Upper Hair's
        //   line(scalePoint(i).x, scalePoint(i).y, scalePoint(i).x-4, scalePoint(i).y-10)
          vertex(scalePoint(i).x, scalePoint(i).y);
          bezierVertex(scalePoint(i).x, scalePoint(i).y);
          // ellipse(scalePoint(i).x, scalePoint(i).y, 3);
        }
        endShape();
    }
}


