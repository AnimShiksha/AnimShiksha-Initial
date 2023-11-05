class ChinkiBody{
    constructor() {}

    chinkiBody(bodyPoses){
        let girlTummy_ = new GirlsTummy();
        let girlHands = new GirlsHands();
        let girlPant = new GirlPant();
        let girlSkirt = new GirlSkirt();

        let Scalingx = bodyPoses.leftShoulder.x + bodyPoses.rightShoulder.x + bodyPoses.leftElbow.x + bodyPoses.rightElbow.x;
        let Scalingy = bodyPoses.leftShoulder.y + bodyPoses.rightShoulder.y + bodyPoses.leftElbow.y + bodyPoses.rightElbow.y;

        let handScaling = ((Scalingx/4) + (Scalingy/4))/50

        girlHands.girlsHandsShoulderToElbow(bodyPoses,20,handScaling/1.2);
        girlTummy_.girlTummy(bodyPoses,20,10);
        girlPant.girlsPant(bodyPoses,20,20);
        
        girlSkirt.girlsSkirt(bodyPoses);
        girlHands.girlsHandsElbowToWrist(bodyPoses,20,handScaling/1.2);        
    }
}