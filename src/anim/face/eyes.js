
class Eyes{
    constructor(){ 
     }
    drawEye(whichEye,size,n){
        
      stroke(0)
      let x = whichEye.x
      let y = whichEye.y
      var angle = frameCount * 0.2;
      fill(255);
      strokeWeight(2);
      stroke(0);
      ellipse(x, y, size, size);
      
      fill(56);
      noStroke();
      ellipse(x+cos(angle*n)*size/5, y+sin(angle*n)*size/5, size/2, size/2);
    }
  
  
}