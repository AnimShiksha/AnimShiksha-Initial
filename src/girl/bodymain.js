class GirlsBody{
    constructor() {}

    girlsBody(bodyPoses){
        let girlTummy_ = new GirlsTummy();
        let girlHands = new GirlsHands();

        girlTummy_.girlTummy(bodyPoses,20,10);
        girlHands.girlsHandsElbowToWrist(bodyPoses,20,20)

        
    }
}