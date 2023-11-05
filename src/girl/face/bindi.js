class Bindi{
    constructor(){}

    girlBindi(bindiLandmarks,bindiWidth){
        let landmark = bindiLandmarks.midwayBetweenEyes;

          ellipse(scalePoint(landmark[0]).x, scalePoint(landmark[0]).y, bindiWidth);
    }
}


