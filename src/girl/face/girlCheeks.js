class GirlCheeks{
    constructor(){}

    girlsCheeks(cheeksLandMrk){
        let cheekRight = cheeksLandMrk.rightCheek[0];
        ellipse(scalePoint(cheekRight).x, scalePoint(cheekRight).y, 3);

        let cheekLeft = cheeksLandMrk.leftCheek[0];
        ellipse(scalePoint(cheekLeft).x, scalePoint(cheekLeft).y, 3);
       
    }


}