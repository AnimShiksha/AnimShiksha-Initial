class GhadiBody{
    constructor() {}

    ghadiBody(poseLandmarks){
        let tummy = new Tummy();
        let hand = new Hands();
        let leg = new Legs();
        let shirt = new Shirt();
        let shirtHands = new ShirtHands();
        let pants = new Pant()

        // shirt.shirtAnim(poseLandmarks);
        hand.handsAnimShoulderToElbow(poseLandmarks,40,30);
        shirtHands.shirtHandsAnim(poseLandmarks,40,20);
        tummy.tummyAnim(poseLandmarks,20,10)
        hand.handsAnimElbowToWrist(poseLandmarks,40,30);

        // leg.legsAnim(poseLandmarks,7,30);
        pants.pantAnim(poseLandmarks,20,50);
        // shoes(poseLandmarks);

      }
}

