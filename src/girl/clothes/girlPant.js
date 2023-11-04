class GirlPant{
    constructor(){}

    girlsPant(pose_,pantWidth,pantCircleSize){
        // Hip
        let leftHipX = pose_.leftHip.x;
        let leftHipY = pose_.leftHip.y;
        let rightHipX = pose_.rightHip.x;
        let rightHipY = pose_.rightHip.y;

        let leftKneeX = pose_.leftKnee.x;
        let leftKneeY = pose_.leftKnee.y;

        let rightKneeX = pose_.rightKnee.x;
        let rightKneeY = pose_.rightKnee.y;

        // Pant Upper Part

        let pantx = 10
        let panty = 80

        fill(255, 204, 153);
        stroke(0)
        strokeWeight(2);
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
        endShape(CLOSE);

        fill(3);
        stroke(222);
        strokeWeight(2);
        ellipse(leftKneeX, leftKneeY, pantCircleSize, pantCircleSize);
        ellipse(rightKneeX, rightKneeY, pantCircleSize, pantCircleSize);
    }
}