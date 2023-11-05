class GirlHairs{
    constructor(){}

    girlsHair(points,HairsHeight){
      stroke(0);
      strokeWeight(4);
      fill(0);

      beginShape();
      for(let i = 0;i<=10;i++){
        curveVertex(scalePoint(points[i]).x, scalePoint(points[i]).y);
        // if(i >4){
        //   curveVertex(scalePoint(points[i]).x+scalePoint(points[i]).x/20, scalePoint(points[i]).y);
        // }
        if(i ==10){
          curveVertex(scalePoint(points[i]).x+scalePoint(points[i]).x/30, scalePoint(points[i]).y+scalePoint(points[i]).y/5);
        }
      }

      for(let i = 10;i>=0;i--){
        curveVertex(scalePoint(points[i]).x, scalePoint(points[i]).y-scalePoint(points[i]).y/HairsHeight);
      }

      for(let i = 35;i>=26;i--){
        curveVertex(scalePoint(points[i]).x, scalePoint(points[i]).y-scalePoint(points[i]).y/HairsHeight);
      }

      for(let i = 26;i<36;i++){
        curveVertex(scalePoint(points[i]).x, scalePoint(points[i]).y);
        // if(i<30){
        //   curveVertex(scalePoint(points[i]).x-scalePoint(points[i]).x/20, scalePoint(points[i]).y);
        // }
        if(i ==26){
          curveVertex(scalePoint(points[i]).x-scalePoint(points[i]).x/30, scalePoint(points[i]).y+scalePoint(points[i]).y/5);
        }
      }
      endShape();
  }
}