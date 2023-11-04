class Hairs{
    constructor(){}

    girlsHair(points,hairIMG){
      let hairLndMrk = points.silhouette[0];
      image(hairIMG, hairLndMrk.x, hairLndMrk.y, 20, 20)
    }
}
