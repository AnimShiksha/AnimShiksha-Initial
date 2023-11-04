class ShirtHands{
    constructor(){}


    shirtHandsAnim(pose_,shirtHandsize,handWidth){
        // shirtHands
        let leftElbowX = pose_.leftElbow.x;
        let leftElbowY = pose_.leftElbow.y;

        let rightElbowX = pose_.rightElbow.x;
        let rightElbowY = pose_.rightElbow.y;

              
        let leftShoulderX = pose_.leftShoulder.x;
        let leftShoulderY = pose_.leftShoulder.y;
        let rightShoulderX = pose_.rightShoulder.x;
        let rightShoulderY = pose_.rightShoulder.y;
        

        let leftWristX = pose_.leftWrist.x;
        let leftWristY = pose_.leftWrist.y;
        
        let rightWristX = pose_.rightWrist.x;
        let rightWristY = pose_.rightWrist.y;

        let leftmidx = (leftShoulderX + leftElbowX)/2
        let leftmidy = (leftShoulderY + leftElbowY)/2

                
        let rightmidx = (rightShoulderX + rightElbowX)/2
        let rightmidy = (rightShoulderY + rightElbowY)/2


        // Left Sleeve

        fill(33, 9, 56);
        stroke(0);
        strokeWeight(2);
        beginShape();
        curveVertex(leftShoulderX-handWidth, leftShoulderY+handWidth);
        curveVertex(leftmidx-handWidth, leftmidy+handWidth);
        // curveVertex(leftWristX-handWidth, leftWristY+handWidth);
        // curveVertex(leftWristX+handWidth, leftWristY-handWidth);
        curveVertex(leftmidx+handWidth, leftmidy-handWidth);
        curveVertex(leftShoulderX+handWidth, leftShoulderY-handWidth);
        endShape(CLOSE);

        // Right sleeve
                       
        beginShape();
        curveVertex(rightShoulderX+handWidth, rightShoulderY+handWidth);
        curveVertex(rightmidx+handWidth, rightmidy+handWidth);
        // curveVertex(rightElbowX+handWidth, rightElbowY+handWidth);
        // curveVertex(rightWristX+handWidth, rightWristY+handWidth);
        // curveVertex(rightWristX-handWidth, rightWristY-handWidth);
        curveVertex(rightmidx-handWidth, rightmidy-handWidth);
        curveVertex(rightShoulderX-handWidth, rightShoulderY-handWidth);
        endShape(CLOSE);

        // fill(0,222,22);
        // ellipse(leftWristX,leftWristY,shirtHandsize,shirtHandsize);
        // ellipse(rightWristX,rightWristY,shirtHandsize,shirtHandsize);
        // ellipse(leftElbowX, leftElbowY, shirtHandsize, shirtHandsize);
        // ellipse(rightElbowX, rightElbowY, shirtHandsize, shirtHandsize);



        
    }
}