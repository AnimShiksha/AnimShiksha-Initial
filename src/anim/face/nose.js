class Nose{
    constructor() {}
    drawNose(nose,noseSize) {
        fill(14, 14, 48); // Red color for a funny nose
        stroke(0);
        ellipse(nose.x, nose.y, noseSize/2, noseSize/2); // Adjust the size as needed
      }
      
}