class GirlEyes{
    constructor(){}

    makeEyes(eyeLandmarks){

        let leftUpperEye2 = eyeLandmarks.leftEyeUpper1;
        let leftMidUpper2 = eyeLandmarks.leftEyeUpper0[3];


        // fill(222);
        noFill();
        stroke(22,33,3);
        strokeWeight(4);
        beginShape();
        for(let i of leftUpperEye2){
          vertex(scalePoint(i).x, scalePoint(i).y);
          bezierVertex(scalePoint(i).x, scalePoint(i).y);
        }
        endShape();


        let leftLowerEye2 = eyeLandmarks.leftEyeLower1;

        noFill();
        // fill(222);
        stroke(22);
        strokeWeight(4);
        beginShape();
        for(let i of leftLowerEye2){
        vertex(scalePoint(i).x, scalePoint(i).y);
        // bezierVertex(scalePoint(i).x, scalePoint(i).y);
        // ellipse(scalePoint(i).x, scalePoint(i).y, 2);
        }
        endShape();

        let rightUpperEye2 = eyeLandmarks.rightEyeUpper1;
        let rightMidUpper2 = eyeLandmarks.rightEyeUpper0[3];
        fill(0);
        ellipse(scalePoint(rightMidUpper2).x, scalePoint(rightMidUpper2).y, 8);
        fill(0);
        ellipse(scalePoint(leftMidUpper2).x, scalePoint(leftMidUpper2).y, 8);


        noFill();
        stroke(22,33,3);
        strokeWeight(4);
        beginShape();
        for(let i of rightUpperEye2){
        vertex(scalePoint(i).x, scalePoint(i).y);
        bezierVertex(scalePoint(i).x, scalePoint(i).y);
        // ellipse(scalePoint(i).x, scalePoint(i).y, 2);
        }
        endShape();


        let rightLowerEye2 = eyeLandmarks.rightEyeLower1;
        noFill();
        stroke(22);
        strokeWeight(4);
        beginShape();
        for(let i of rightLowerEye2){
        vertex(scalePoint(i).x, scalePoint(i).y);
        bezierVertex(scalePoint(i).x, scalePoint(i).y);
        // ellipse(scalePoint(i).x, scalePoint(i).y, 2);
        }
        endShape();

    }
}