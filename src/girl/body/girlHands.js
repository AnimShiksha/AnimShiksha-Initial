class GirlsHands{
    constructor(){}


    girlsHandsShoulderToElbow(pose_,handSize,handWidth){
        // hands
        let leftElbowX = pose_.leftElbow.x;
        let leftElbowY = pose_.leftElbow.y;

        let rightElbowX = pose_.rightElbow.x;
        let rightElbowY = pose_.rightElbow.y;

              
        let leftShoulderX = pose_.leftShoulder.x;
        let leftShoulderY = pose_.leftShoulder.y;
        let rightShoulderX = pose_.rightShoulder.x;
        let rightShoulderY = pose_.rightShoulder.y;

        // Left hand

        fill(255, 204, 153); // Skin color
        stroke(67, 13, 214);
        strokeWeight(3);
        beginShape();
        curveVertex(leftShoulderX+leftShoulderX/handWidth, leftShoulderY-leftShoulderY/handWidth);
        curveVertex(leftShoulderX-leftShoulderX/handWidth, leftShoulderY+leftShoulderY/handWidth);
        curveVertex(leftElbowX-leftElbowX/handWidth, leftElbowY+leftElbowY/handWidth);
        curveVertex(leftElbowX+leftElbowX/handWidth, leftElbowY-leftElbowY/handWidth);
        endShape(CLOSE);


        // Right Hand
        beginShape();
        curveVertex(rightShoulderX+rightShoulderX/handWidth, rightShoulderY+rightShoulderY/handWidth);
        curveVertex(rightShoulderX-rightShoulderX/handWidth, rightShoulderY-rightShoulderY/handWidth);
        curveVertex(rightElbowX-rightElbowX/handWidth, rightElbowY-rightElbowY/handWidth);
        curveVertex(rightElbowX+rightElbowX/handWidth, rightElbowY+rightElbowY/handWidth);
        endShape(CLOSE);

                
        // ellipse(leftElbowX, leftElbowY, handSize, handSize);
        // ellipse(rightElbowX, rightElbowY, handSize, handSize);


        // beginShape();
        // vertex(leftShoulderX+leftShoulderX/handWidth, leftShoulderY-leftShoulderY/handWidth);
        // quadraticVertex(leftShoulderX+leftShoulderX/handWidth, leftShoulderY-leftShoulderY/handWidth,leftShoulderX-leftShoulderX/handWidth, leftShoulderY+leftShoulderY/handWidth);
        // quadraticVertex(leftElbowX-leftElbowX/handWidth, leftElbowY+leftElbowY/handWidth,leftElbowX+leftElbowX/handWidth, leftElbowY-leftElbowY/handWidth);

        // endShape(CLOSE)
    }


    girlsHandsElbowToWrist(pose_,handSize,handWidth){
        let leftWristX = pose_.leftWrist.x;
        let leftWristY = pose_.leftWrist.y;
        
        let rightWristX = pose_.rightWrist.x;
        let rightWristY = pose_.rightWrist.y;

        let leftElbowX = pose_.leftElbow.x;
        let leftElbowY = pose_.leftElbow.y;

        let rightElbowX = pose_.rightElbow.x;
        let rightElbowY = pose_.rightElbow.y;

                      
        let leftShoulderX = pose_.leftShoulder.x;
        let leftShoulderY = pose_.leftShoulder.y;
        


        fill(255, 204, 153); // Skin color
        beginShape();
        curveVertex(leftElbowX+leftElbowX/handWidth, leftElbowY-leftElbowY/handWidth);
        curveVertex(leftElbowX-leftElbowX/handWidth, leftElbowY+leftElbowY/handWidth);
        curveVertex(leftWristX-leftWristX/handWidth, leftWristY+leftWristY/handWidth);
        curveVertex(leftWristX+leftWristX/handWidth, leftWristY-leftWristY/handWidth);
        endShape(CLOSE);

        // Right Hand
                
        beginShape();
        curveVertex(rightElbowX+rightElbowX/handWidth, rightElbowY+rightElbowY/handWidth);
        curveVertex(rightElbowX-rightElbowX/handWidth, rightElbowY-rightElbowY/handWidth);
        curveVertex(rightWristX-rightWristX/handWidth, rightWristY-rightWristY/handWidth);
        curveVertex(rightWristX+rightWristX/handWidth, rightWristY+rightWristY/handWidth);
        endShape(CLOSE);

        

        // fill(0,222,22);


        // Left Hand
        // blend();
        // beginShape();
        // vertex(leftWristX+leftWristX/handWidth, leftWristY-leftWristY/handWidth);
        // // vertex(leftShoulderX+leftShoulderX/handWidth, leftShoulderY-leftShoulderY/handWidth);
        // quadraticVertex(leftElbowX+leftElbowX/handWidth, leftElbowY-leftElbowY/handWidth,leftElbowX-leftElbowX/handWidth, leftElbowY+leftElbowY/handWidth);
        // quadraticVertex(leftWristX-leftWristX/handWidth, leftWristY+leftWristY/handWidth,leftWristX+leftWristX/handWidth, leftWristY-leftWristY/handWidth);

        // quadraticVertex(leftShoulderX+leftShoulderX/handWidth, leftShoulderY-leftShoulderY/handWidth,leftShoulderX-leftShoulderX/handWidth, leftShoulderY+leftShoulderY/handWidth);
        // quadraticVertex(leftElbowX-leftElbowX/handWidth, leftElbowY+leftElbowY/handWidth,leftElbowX+leftElbowX/handWidth, leftElbowY-leftElbowY/handWidth);

        // endShape(CLOSE);


        // beginShape();
        // vertex(rightElbowX+rightElbowX/handWidth, rightElbowY+rightElbowY/handWidth);
        // quadraticVertex(rightElbowX+rightElbowX/handWidth, rightElbowY+rightElbowY/handWidth,rightElbowX-rightElbowX/handWidth, rightElbowY-rightElbowY/handWidth);
        // quadraticVertex(rightWristX-rightWristX/handWidth, rightWristY-rightWristY/handWidth,rightWristX+rightWristX/handWidth, rightWristY+rightWristY/handWidth);

        endShape(CLOSE);
        ellipse(leftWristX,leftWristY,handSize,handSize);
        ellipse(rightWristX,rightWristY,handSize,handSize);


    }
}