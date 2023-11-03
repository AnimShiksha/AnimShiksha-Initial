class Pant{
    constructor(){}

    pantAnim(pose_,pantWidth,pantCircleSize){
        // Hip
        let leftHipX = pose_.leftHip.x;
        let leftHipY = pose_.leftHip.y;
        let rightHipX = pose_.rightHip.x;
        let rightHipY = pose_.rightHip.y;

        let leftKneeX = pose_.leftKnee.x;
        let leftKneeY = pose_.leftKnee.y;

        let rightKneeX = pose_.rightKnee.x;
        let rightKneeY = pose_.rightKnee.y;

        // ANkle

        let leftAnkleX = pose_.leftAnkle.x;
        let leftAnkleY = pose_.leftAnkle.y;
        
        let rightAnkleX = pose_.rightAnkle.x;
        let rightAnkleY = pose_.rightAnkle.y;

        let leftHip = (pose_.leftHip)
        let rightHip = (pose_.rightHip)


        // Pant Upper Part

        let pantx = 10
        let panty = 80
        let pantyDown = 30
        fill(9, 56, 46);
        beginShape();
        // curveVertex(leftHipX+pantx,leftHipY-panty)
        // curveVertex(rightHipX-pantx,rightHipY-panty)
        // curveVertex(rightHipX-pantx,rightHipY+pantyDown)
        // curveVertex(leftHipX+pantx,leftHipY+pantyDown)
        endShape(CLOSE);


        // Left Part

        let leftmidx = (leftHipX + leftKneeX)/2
        let leftmidy = (leftHipY +leftKneeY)/2


        fill(33, 9, 56);
        stroke(0);
        strokeWeight(2);
        beginShape();
        // curveVertex(leftHipX-pantWidth, leftHipY+pantWidth);
        // curveVertex(leftmidx-pantWidth, leftmidy+pantWidth);
        // // // curveVertex(leftWristX-pantx, leftWristY+pantx);
        // // // curveVertex(leftWristX+pantx, leftWristY-pantx);
        // curveVertex(leftmidx+pantWidth, leftmidy-pantWidth);
        // curveVertex(leftHipX+pantWidth, leftHipY-pantWidth);
        endShape(CLOSE);

        let rightmidx = (rightHipX + rightKneeX)/2
        let rightmidy = (rightHipY + rightKneeY)/2


        beginShape();
        curveVertex(leftHipX+pantx,leftHipY-panty);
        curveVertex(rightHipX-pantx,rightHipY-panty);
        curveVertex(rightKneeX,rightKneeY);
        curveVertex(rightKneeX+pantWidth,rightKneeY);
        curveVertex(rightKneeX+pantWidth,rightKneeY-pantWidth)
        curveVertex(rightHipX+pantWidth,rightHipY-pantWidth);

        // Left Part.
        curveVertex(leftHipX-pantWidth, leftHipY-pantWidth);
        curveVertex(leftKneeX, leftKneeY);
        curveVertex(leftKneeX+pantWidth, leftKneeY);
        curveVertex(leftKneeX+pantWidth, leftKneeY-pantWidth);
        // curveVertex(leftmidx, leftmidy-pantWidth);
        // curveVertex(leftmidx-pantWidth, leftmidy+pantWidth);




        // ellipse(rightmidx+pantWidth,rightmidy-pantWidth,20)




        endShape(CLOSE);











        // beginShape();
        // curveVertex(leftKneeX+pantWidth, leftKneeY+pantWidth);
        // curveVertex(leftKneeX-pantWidth, leftKneeY-pantWidth);
        // curveVertex(leftAnkleX-pantWidth, leftAnkleY-pantWidth);
        // curveVertex(leftAnkleX+pantWidth, leftAnkleY+pantWidth);
        // endShape(CLOSE);

        // beginShape();
        // curveVertex(leftHipX+pantWidth, leftHipY+pantWidth);
        // curveVertex(leftHipX-pantWidth, leftHipY-pantWidth);
        // curveVertex(leftKneeX-pantWidth, leftKneeY-pantWidth);
        // curveVertex(leftKneeX+pantWidth, leftKneeY+pantWidth);
        // endShape(CLOSE);

        // beginShape();
        // curveVertex(rightKneeX+pantWidth, rightKneeY+pantWidth);
        // curveVertex(rightKneeX-pantWidth, rightKneeY-pantWidth);
        // curveVertex(rightAnkleX-pantWidth, rightAnkleY-pantWidth);
        // curveVertex(rightAnkleX+pantWidth, rightAnkleY+pantWidth);
        // endShape(CLOSE);

        
        // beginShape();
        // curveVertex(rightHipX+pantWidth, rightHipY+pantWidth);
        // curveVertex(rightHipX-pantWidth, rightHipY-pantWidth);
        // curveVertex(rightKneeX-pantWidth, rightKneeY-pantWidth);
        // curveVertex(rightKneeX+pantWidth, rightKneeY+pantWidth);
        // endShape(CLOSE);

        // ellipse(leftAnkleX,leftAnkleY,pantCircleSize,pantCircleSize);
        // ellipse(rightAnkleX,rightAnkleY,pantCircleSize,pantCircleSize);

        fill(3);
        stroke(222);
        strokeWeight(2);
        ellipse(leftKneeX, leftKneeY, pantCircleSize, pantCircleSize);
        ellipse(rightKneeX, rightKneeY, pantCircleSize, pantCircleSize);


    }
}