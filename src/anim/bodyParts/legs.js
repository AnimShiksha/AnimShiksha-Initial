class Legs{
    constructor(){}

    legsAnim(pose_){
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


        line(leftHipX,leftHipY,leftKneeX,leftKneeY);
        line(rightHipX,rightHipY,rightKneeX,rightKneeY);


        ellipse(leftAnkleX,leftAnkleY,size-90,size-90);
        ellipse(rightAnkleX,rightAnkleY,size-90,size-90);

        // Legs Last Part.
        line(leftKneeX,leftKneeY,leftAnkleX,leftAnkleY);
        line(rightKneeX,rightKneeY,rightAnkleX,rightAnkleY);        
    }
}