class Hands{
    constructor(){}


    handsAnim(pose_){
        // hands
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

        ellipse(leftElbowX, leftElbowY, size-90, size-90);
        ellipse(rightElbowX, rightElbowY, size-90, size-90);

        // stroke(23);
        // strokeWeight(5);
        line(leftShoulderX, leftShoulderY, leftElbowX, leftElbowY);
        line(rightShoulderX, rightShoulderY, rightElbowX, rightElbowY);

        // // strokeWeight(5);
        line(leftElbowX,leftElbowY,leftWristX,leftWristY);
        line(rightElbowX,rightElbowY,rightWristX,rightWristY);   
        
        ellipse(leftWristX,leftWristY,size-90,size-90);
        ellipse(rightWristX,rightWristY,size-90,size-90);
        
    }
}