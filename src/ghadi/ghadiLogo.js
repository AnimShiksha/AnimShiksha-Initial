class GhadiLogo{
    constructor() {}
    ghadiLogo(nose,noseSize) {
        // fill(14, 14, 48); // Red color for a funny nose
        stroke(0);
        ellipse(nose.x, nose.y, noseSize/2, noseSize/2); // Adjust the size as needed
        // noFill();

        fill(21, 4, 43,90); // Red color for a funny nose
        ellipse(nose.x, nose.y, noseSize*5); // Adjust the size as needed
        line(nose.x, nose.y, nose.x+noseSize*2, nose.y+noseSize*1.3)
        
        line(nose.x, nose.y, nose.x+noseSize*2, nose.y+noseSize*0.3)
      }
}
