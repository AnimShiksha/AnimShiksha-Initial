class GirlEyes{
    constructor(){}

    makeEyes(eyeLandmarks,eyeCircleSize){

        let leftUpperEye2 = eyeLandmarks.leftEyeUpper1;
        let leftLowerEye2 = eyeLandmarks.leftEyeLower1;
        let leftMidUpper2 = eyeLandmarks.leftEyeUpper0[3];


        fill(222);
        stroke(0);
        strokeWeight(2);
        beginShape();
        for(let i of leftUpperEye2){
          vertex(scalePoint(i).x, scalePoint(i).y);
          // bezierVertex(scalePoint(i).x, scalePoint(i).y);
        }

        curveVertex(scalePoint(leftLowerEye2[6]).x, scalePoint(leftLowerEye2[6]).y)
        curveVertex(scalePoint(leftLowerEye2[5]).x, scalePoint(leftLowerEye2[5]).y)
        curveVertex(scalePoint(leftLowerEye2[4]).x, scalePoint(leftLowerEye2[4]).y)
        curveVertex(scalePoint(leftLowerEye2[3]).x, scalePoint(leftLowerEye2[3]).y)
        curveVertex(scalePoint(leftLowerEye2[2]).x, scalePoint(leftLowerEye2[2]).y)
        curveVertex(scalePoint(leftLowerEye2[1]).x, scalePoint(leftLowerEye2[1]).y)
        curveVertex(scalePoint(leftLowerEye2[0]).x, scalePoint(leftLowerEye2[0]).y)
        endShape(CLOSE);


        let rightUpperEye2 = eyeLandmarks.rightEyeUpper1;
        let rightMidUpper2 = eyeLandmarks.rightEyeUpper0[3];
        let rightLowerEye2 = eyeLandmarks.rightEyeLower1;


        fill(222);
        stroke(0);
        strokeWeight(2);
        beginShape();
        for(let i of rightUpperEye2){
          vertex(scalePoint(i).x, scalePoint(i).y);
          // bezierVertex(scalePoint(i).x, scalePoint(i).y);
          // ellipse(scalePoint(i).x, scalePoint(i).y, 2);
        }

        curveVertex(scalePoint(rightLowerEye2[6]).x, scalePoint(rightLowerEye2[6]).y)
        curveVertex(scalePoint(rightLowerEye2[5]).x, scalePoint(rightLowerEye2[5]).y)
        curveVertex(scalePoint(rightLowerEye2[4]).x, scalePoint(rightLowerEye2[4]).y)
        curveVertex(scalePoint(rightLowerEye2[3]).x, scalePoint(rightLowerEye2[3]).y)
        curveVertex(scalePoint(rightLowerEye2[2]).x, scalePoint(rightLowerEye2[2]).y)
        curveVertex(scalePoint(rightLowerEye2[1]).x, scalePoint(rightLowerEye2[1]).y)
        curveVertex(scalePoint(rightLowerEye2[0]).x, scalePoint(rightLowerEye2[0]).y)

        endShape(CLOSE);


        fill(0);
        ellipse(scalePoint(rightMidUpper2).x, scalePoint(rightMidUpper2).y, eyeCircleSize);
        fill(0);
        ellipse(scalePoint(leftMidUpper2).x, scalePoint(leftMidUpper2).y, eyeCircleSize);
    }
}