let haircolors = ['#000000', '#804000', '#996515', '#FFA500', '#FFD700', '#FFFFFF']; // Hair colors
class Hair {
  constructor() {
      stroke(0);
      strokeWeight(3);
      this.hcolor = 2; // You can change the hair color here
  }

  render(x, y, h, w) {
      // fill(haircolors[this.hcolor]);
      beginShape();
      curveVertex(x, y); // Start with the center vertex
      curveVertex(x, y);

      // Adjust the control points to change the shape
      curveVertex(x + w, y);            // Right control point
      curveVertex(x + w, y - h / 2);    // Upper-right control point
      curveVertex(x, y - h);            // Top control point
      curveVertex(x - w, y - h / 2);    // Upper-left control point
      curveVertex(x - w, y);            // Left control point

      curveVertex(x, y);
      curveVertex(x, y);
      endShape();
  }
}
