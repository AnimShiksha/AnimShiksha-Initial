class Legs{
    constructor(){}

    legsAnim(pose_,legWidth,legCircleSize){
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


        // line(leftHipX,leftHipY,leftKneeX,leftKneeY);
        // line(rightHipX,rightHipY,rightKneeX,rightKneeY);


        // ellipse(leftKneeX,leftKneeY,20,20);
        // ellipse(rightKneeX,rightKneeY,20,20);


        // ellipse(leftAnkleX,leftAnkleY,20,20);
        // ellipse(rightAnkleX,rightAnkleY,20,20);

        // // Legs Last Part.
        // line(leftKneeX,leftKneeY,leftAnkleX,leftAnkleY);
        // line(rightKneeX,rightKneeY,rightAnkleX,rightAnkleY);    
        
                
        // beginShape();
        // curveVertex(leftKneeX+legWidth, leftKneeY+legWidth);
        // curveVertex(leftKneeX-legWidth, leftKneeY-legWidth);
        // curveVertex(leftAnkleX-legWidth, leftAnkleY-legWidth);
        // curveVertex(leftAnkleX+legWidth, leftAnkleY+legWidth);
        // endShape(CLOSE);

        beginShape();
        curveVertex(leftHipX+legWidth, leftHipY+legWidth);
        curveVertex(leftHipX-legWidth, leftHipY-legWidth);
        curveVertex(leftKneeX-legWidth, leftKneeY-legWidth);
        curveVertex(leftKneeX+legWidth, leftKneeY+legWidth);
        endShape(CLOSE);


        
        // beginShape();
        // curveVertex(rightKneeX+legWidth, rightKneeY+legWidth);
        // curveVertex(rightKneeX-legWidth, rightKneeY-legWidth);
        // curveVertex(rightAnkleX-legWidth, rightAnkleY-legWidth);
        // curveVertex(rightAnkleX+legWidth, rightAnkleY+legWidth);
        // endShape(CLOSE);

        // Fat Hand
        beginShape();
        curveVertex(rightHipX+legWidth, rightHipY+legWidth);
        curveVertex(rightHipX-legWidth, rightHipY-legWidth);
        curveVertex(rightKneeX-legWidth, rightKneeY-legWidth);
        curveVertex(rightKneeX+legWidth, rightKneeY+legWidth);
        endShape(CLOSE);

        fill(0,222,22);
        // ellipse(leftAnkleX,leftAnkleY,legCircleSize,legCircleSize);
        // ellipse(rightAnkleX,rightAnkleY,legCircleSize,legCircleSize);


        ellipse(leftKneeX, leftKneeY, legCircleSize, legCircleSize);
        ellipse(rightKneeX, rightKneeY, legCircleSize, legCircleSize);


    }
}