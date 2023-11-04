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

        // stroke(23);
        // strokeWeight(5);
        // line(leftShoulderX, leftShoulderY, leftElbowX, leftElbowY);
        // line(rightShoulderX, rightShoulderY, rightElbowX, rightElbowY);

        // // // strokeWeight(5);
        // line(leftElbowX,leftElbowY,leftWristX,leftWristY);
        // line(rightElbowX,rightElbowY,rightWristX,rightWristY);   


        // let handWidth = 10
        
        // Fat Hand

        // Left hand

        fill(255, 204, 153); // Skin color
        // stroke(67, 13, 214);
        // strokeWeight(3);
        beginShape();
        curveVertex(leftShoulderX+leftShoulderX/handWidth, leftShoulderY-leftShoulderY/handWidth);
        curveVertex(leftShoulderX-leftShoulderX/handWidth, leftShoulderY+leftShoulderY/handWidth);
        curveVertex(leftElbowX-leftElbowX/handWidth, leftElbowY+leftElbowY/handWidth);
        curveVertex(leftElbowX+leftElbowX/handWidth, leftElbowY-leftElbowY/handWidth);
        endShape(CLOSE);


        // Fat Hand
        beginShape();
        curveVertex(rightShoulderX+rightShoulderX/handWidth, rightShoulderY+rightShoulderY/handWidth);
        curveVertex(rightShoulderX-rightShoulderX/handWidth, rightShoulderY-rightShoulderY/handWidth);
        curveVertex(rightElbowX-rightElbowX/handWidth, rightElbowY-rightElbowY/handWidth);
        curveVertex(rightElbowX+rightElbowX/handWidth, rightElbowY+rightElbowY/handWidth);
        endShape(CLOSE);

                
        // ellipse(leftElbowX, leftElbowY, handSize, handSize);
        // ellipse(rightElbowX, rightElbowY, handSize, handSize);
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

        

        fill(0,222,22);
        // ellipse(leftWristX,leftWristY,handSize,handSize);
        // ellipse(rightWristX,rightWristY,handSize,handSize);


    }
}