class Hairs{
    constructor(){}

    drawHairs(points,ellipseSize){
        if(predictions.length){
          // let points = predictions[0].annotations.silhouette;
      
          beginShape();
          fill(0);
          for(let i = 0;i<points.length;i++){
            if(i <=5){
              // ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y, 10,10);
              if(i%2 ==0){
                ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y-20, ellipseSize,ellipseSize);
                // vertex(scalePoint(points[i]).x,scalePoint(points[i]).y);
                vertex(scalePoint(points[i]).x, scalePoint(points[i]).y-20)
              }
              else{
                ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y-30, ellipseSize,ellipseSize);
                vertex(scalePoint(points[i]).x, scalePoint(points[i]).y-30);
                vertex(scalePoint(points[i]).x, scalePoint(points[i]).y);
              }
              // vertex(scalePoint(points[5]).x, scalePoint(points[5]).y);
            }else if( i >= 31){
              // ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y, 10,10);
              if(i%2 ==0){
                ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y-20, ellipseSize,ellipseSize);
                vertex(scalePoint(points[i]).x, scalePoint(points[i]).y-20)
                vertex(scalePoint(points[i]).x, scalePoint(points[i]).y)
              }
              else{
                ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y-30, ellipseSize,ellipseSize);
                vertex(scalePoint(points[i]).x, scalePoint(points[i]).y-30)
                vertex(scalePoint(points[i]).x, scalePoint(points[i]).y)
              }
            }
          }
          endShape(CLOSE);
        }
      }

}

// function drawHairs(points,ellipseSize){
//     if(predictions.length){
//       // let points = predictions[0].annotations.silhouette;
  
//       beginShape();
//       fill(0);
//       for(let i = 0;i<points.length;i++){
//         if(i <=5){
//           // ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y, 10,10);
//           if(i%2 ==0){
//             ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y-20, ellipseSize,ellipseSize);
//             // vertex(scalePoint(points[i]).x,scalePoint(points[i]).y);
//             vertex(scalePoint(points[i]).x, scalePoint(points[i]).y-20)
//           }
//           else{
//             ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y-30, ellipseSize,ellipseSize);
//             vertex(scalePoint(points[i]).x, scalePoint(points[i]).y-30);
//             vertex(scalePoint(points[i]).x, scalePoint(points[i]).y);
//           }
//           // vertex(scalePoint(points[5]).x, scalePoint(points[5]).y);
//         }else if( i >= 31){
//           // ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y, 10,10);
//           if(i%2 ==0){
//             ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y-20, ellipseSize,ellipseSize);
//             vertex(scalePoint(points[i]).x, scalePoint(points[i]).y-20)
//             vertex(scalePoint(points[i]).x, scalePoint(points[i]).y)
//           }
//           else{
//             ellipse(scalePoint(points[i]).x,scalePoint(points[i]).y-30, ellipseSize,ellipseSize);
//             vertex(scalePoint(points[i]).x, scalePoint(points[i]).y-30)
//             vertex(scalePoint(points[i]).x, scalePoint(points[i]).y)
//           }
//         }
//       }
//       endShape(CLOSE);
//     }
//   }
  