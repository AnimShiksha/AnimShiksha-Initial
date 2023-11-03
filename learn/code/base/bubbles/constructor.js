
// I am creating the object.
function Bubble(x,y) {
    this.x = x;
    this.y = y;

    this.display = function() {
        stroke(0);
        strokeWeight(3);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    };

    this.move_ = function() {
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
    };
}
