class GirlHairs{
    constructor(){}

    girlsHair(points,hairIMG){
      let hairLndMrk = points.silhouette[0];
      image(hairIMG, scalePoint(hairLndMrk).x, scalePoint(hairLndMrk).y, 90, 90)
    }
}
