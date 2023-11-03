var bubbles = [];
print(bubbles);
function setup() {
    createCanvas(1200, 900); 
    for (var i = 0; i < 40; i++) {
        // bubbles[i] = new Bubble(random(width),random(height));
        print(bubbles);
    }
}

function draw() {
    background(202,200,0);
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move_();
        bubbles[i].display();
        // print(bubbles);
    }
    if (bubbles.length > 50){
        // bubbles.splice(0,1);
    }
}

// this push is like append function.
function mouseClicked(){
    background(202,200,0);
}

function mouseDragged(){
    bubbles.push(new Bubble(x= mouseX,y= mouseY));
}
