class GhadiBody{
    constructor() {}

    ghadiBody(poseLandmarks){
        let tummy = new Tummy();
        // let hand = new Hands();
        let girlHands = new GirlsHands();
        let leg = new Legs();
        let shirt = new Shirt();
        let shirtHands = new ShirtHands();
        let pants = new Pant();

        let Scalingx = poseLandmarks.leftShoulder.x + poseLandmarks.rightShoulder.x + poseLandmarks.leftElbow.x + poseLandmarks.rightElbow.x;
        let Scalingy = poseLandmarks.leftShoulder.y + poseLandmarks.rightShoulder.y + poseLandmarks.leftElbow.y + poseLandmarks.rightElbow.y;

        let handScaling = ((Scalingx/4) + (Scalingy/4))/50

        // shirt.shirtAnim(poseLandmarks);
        // hand.handsAnimShoulderToElbow(poseLandmarks,40,30);
        girlHands.girlsHandsShoulderToElbow(poseLandmarks,20,handScaling/1.2);

        tummy.tummyAnim(poseLandmarks,20,10)

        girlHands.girlsHandsElbowToWrist(poseLandmarks,20,handScaling/1.2);
        shirtHands.shirtHandsAnim(poseLandmarks,40,handScaling*1.2);
        // hand.handsAnimElbowToWrist(poseLandmarks,40,30);

        // leg.legsAnim(poseLandmarks,7,30);
        pants.pantAnim(poseLandmarks,20,50);
        // shoes(poseLandmarks);

      }
}

