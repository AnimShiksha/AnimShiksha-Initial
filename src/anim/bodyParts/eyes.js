
class Eyes{
  constructor(){}

  drawEye(whichEye,size,n){
      
    let x = whichEye.x
    let y = whichEye.y
    var angle = frameCount * 0.2;
    fill(255);
    noStroke();
    ellipse(x, y, size, size);
    
    fill(0);
    // noStroke();
    stroke(0);
    strokeWeight(2);
    ellipse(x+cos(angle*n)*size/5, y+sin(angle*n)*size/5, size/2, size/2);
  }

}
