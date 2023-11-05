class GirlsHands{
    constructor(){}
    girlsHandsShoulderToElbow(pose_,handSize,handWidth){
        let leftElbow = pose_.leftElbow;
        let rightElbow = pose_.rightElbow;

        let leftShoulder = pose_.leftShoulder;
        let rightShoulder = pose_.rightShoulder;

        let leftWrist = pose_.leftWrist;
        let rightWrist = pose_.rightWrist;

        fill(24, 92, 201);
        stroke(2);
        strokeWeight(2);
        smooth();
        // strokeJoin(BEVEL)
        beginShape();
        curveVertex(leftShoulder.x-handWidth, leftShoulder.y+handWidth);
        curveVertex(leftElbow.x-handWidth,leftElbow.y+handWidth);


        // Add wrists.
        // curveVertex(leftWrist.x-handWidth,leftWrist.y+handWidth);
        // curveVertex(leftWrist.x+handWidth,leftWrist.y-handWidth);


        curveVertex(leftElbow.x+handWidth,leftElbow.y-handWidth);
        curveVertex(leftShoulder.x+handWidth, leftShoulder.y-handWidth);
        endShape(CLOSE);

        beginShape();
        curveVertex(rightShoulder.x+handWidth, rightShoulder.y+handWidth);
        curveVertex(rightElbow.x+handWidth, rightElbow.y+handWidth);

        // add writs
        // curveVertex(rightWrist.x+handWidth,rightWrist.y+handWidth);
        // curveVertex(rightWrist.x-handWidth,rightWrist.y-handWidth);

        curveVertex(rightElbow.x-handWidth,rightElbow.y-handWidth);
        curveVertex(rightShoulder.x-handWidth,rightShoulder.y-handWidth);       

        endShape(CLOSE);

        
        ellipse(leftElbow.x, leftElbow.y, handWidth*3);
        ellipse(rightElbow.x, rightElbow.y, handWidth*3);

    }


    girlsHandsElbowToWrist(pose_,handSize,handWidth){
        let leftWrist = pose_.leftWrist;
        let rightWrist = pose_.rightWrist;

        let leftElbow = pose_.leftElbow;
        let rightElbow = pose_.rightElbow;

        fill(24, 92, 21);
        stroke(2);
        strokeWeight(2);
        smooth();
        // strokeJoin(BEVEL)
        beginShape();
        curveVertex(leftWrist.x-handWidth, leftWrist.y+handWidth);
        curveVertex(leftElbow.x-handWidth,leftElbow.y+handWidth);

        curveVertex(leftElbow.x+handWidth,leftElbow.y-handWidth);
        curveVertex(leftWrist.x+handWidth, leftWrist.y-handWidth);
        endShape(CLOSE);


        beginShape();
        curveVertex(rightWrist.x+handWidth, rightWrist.y+handWidth);
        curveVertex(rightElbow.x+handWidth, rightElbow.y+handWidth);

        curveVertex(rightElbow.x-handWidth,rightElbow.y-handWidth);
        curveVertex(rightWrist.x-handWidth,rightWrist.y-handWidth);       

        endShape(CLOSE);  
        
        ellipse(leftWrist.x,leftWrist.y,handWidth*3);
        ellipse(rightWrist.x,rightWrist.y,handWidth*3);


    }
}