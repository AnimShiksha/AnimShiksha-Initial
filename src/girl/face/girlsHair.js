class GirlHairs{
    constructor(){}

    girlsHair(points,hairHeight,goDown){
      stroke(0);
      strokeWeight(1);
      fill(43, 10, 13);

      beginShape();
      for(let i = 0;i<=10;i++){
        curveVertex(scalePoint(points[i]).x, scalePoint(points[i]).y);
        if(i ==10){
          curveVertex(scalePoint(points[i]).x+scalePoint(points[i]).x/hairHeight, scalePoint(points[i]).y+scalePoint(points[i]).y/goDown);
        }
      }

      for(let i = 10;i>=0;i--){
        if(i<5){
          curveVertex(scalePoint(points[i]).x+scalePoint(points[i]).x/hairHeight, scalePoint(points[i]).y-scalePoint(points[i]).y/hairHeight);
        }else{
          curveVertex(scalePoint(points[i]).x+scalePoint(points[i]).x/hairHeight, scalePoint(points[i]).y-scalePoint(points[i]).y/hairHeight);
        }

      }
      for(let i = 35;i>=26;i--){
        if(i>30){
          curveVertex(scalePoint(points[i]).x-scalePoint(points[i]).x/hairHeight, scalePoint(points[i]).y-scalePoint(points[i]).y/hairHeight);
        }else{
          curveVertex(scalePoint(points[i]).x-scalePoint(points[i]).x/hairHeight, scalePoint(points[i]).y-scalePoint(points[i]).y/hairHeight);
          curveVertex(scalePoint(points[26]).x-scalePoint(points[26]).x/hairHeight, scalePoint(points[26]).y+scalePoint(points[i]).y/goDown);
        }
      }

      for(let i = 26;i<36;i++){
        curveVertex(scalePoint(points[i]).x, scalePoint(points[i]).y);
      }
      endShape();
  }
}