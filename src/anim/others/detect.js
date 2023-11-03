// colors.js has a list of hex codes for skin tones, hair and eye colors. I created arrays to add a selection of realistic colors for each category, rather than fill with completely random colors. 

let hair, eyes, face, nose, mouth; // Creates the variables that get populated with the classes I made.

function setup() {
  createCanvas(800, 800);
  hair = new Hair();
  eyes = new Eyes();
  face = new Face();
  nose = new Nose();
  mouth = new Mouth();
}

function draw() {
  background(255);
  hair.render();
  face.render();
  nose.render();
  eyes.render();
  mouth.render();

  // The following section is to get the "front" part of some hair styles. 
  if (hair.hshape == 2) { //Bangs for the long hair style.
    stroke(0);
    strokeWeight(3);
    fill(haircolors[hair.hcolor]);
    arc(400, 380, 246, 280, PI, 2 * PI, CHORD);
  } else if (hair.hshape == 1) { //Mohawk hair style. It's all in the front.
    stroke(0);
    strokeWeight(3);
    fill(haircolors[hair.hcolor]);
    quad(380, 340, 420, 340, 430, 250, 370, 250);
  } else if (hair.hshape == 4) { //Top of the bun hair style.
    stroke(0);
    strokeWeight(3);
    fill(haircolors[hair.hcolor]);
    beginShape();
    curveVertex(400, 350);
    curveVertex(400, 350);
    curveVertex(300, 360);
    curveVertex(330, 310);
    curveVertex(400, 295);
    curveVertex(470, 310);
    curveVertex(500, 360);
    curveVertex(400, 350);
    curveVertex(400, 350);
    endShape();
  }

}

// mouseClicked creates a new loop and generates new random colors and shapes within each category.
function mouseClicked() {
  hair = new Hair();
  eyes = new Eyes();
  face = new Face();
  nose = new Nose();
  mouth = new Mouth();
}

// Face creates an ellipse and fills with a random selection from the skintone options.
class Face {
  constructor() {
    stroke(0);
    strokeWeight(3);
    this.scolor = round(random(skincolors.length - 1));
  }
  render() {
    fill(skincolors[this.scolor]);
    ellipse(400, 400, 200);
  }

}

// Eyes creates ellipses and fills with a random selection from the eye color options. The whites of the eyes are in a random size between 20 and 40, and the irises adjust to half that random size.
class Eyes {
  constructor() {
    this.ecolor = round(random(eyecolors.length - 1));
    this.esize = random(20, 40);
  }

  render() {
    stroke(0);
    strokeWeight(2);
    fill(255); //Whites of the eye
    ellipse(360, 400, this.esize);
    ellipse(440, 400, this.esize);
    fill(eyecolors[this.ecolor]); //Irises
    ellipse(360, 397, (this.esize / 2));
    ellipse(440, 397, (this.esize / 2));
  }
}

// Hair fills with a random selection from the hair color options.
class Hair {
  constructor() {
    stroke(0);
    strokeWeight(3);
    this.hcolor = round(random(haircolors.length - 1));

    this.hshape = round(random(5));
  }

  // These are the hair styles. They're assigned a value and then picked randomly.
  render() {
    fill(haircolors[this.hcolor]);
    if (this.hshape == 0) { // Afro hair
      ellipse(400, 300, 500);
    } else if (this.hshape == 1) { //Mohawk; this is empty because it gets rendered in the draw loop, since it's only on top of the face
    } else if (this.hshape == 2) { //Long hair; this has bangs, which are rendered in the draw loop
      beginShape();
      curveVertex(400, 650);
      curveVertex(400, 650);
      curveVertex(530, 650);
      curveVertex(510, 600);
      curveVertex(510, 320);
      curveVertex(400, 250);
      curveVertex(290, 320);
      curveVertex(290, 600);
      curveVertex(270, 650);
      curveVertex(400, 650);
      curveVertex(400, 650);
      endShape();
    } else if (this.hshape == 3) { //Spiky hair
      beginShape();
      vertex(300, 400);
      vertex(320, 250);
      vertex(340, 280);
      vertex(360, 250);
      vertex(380, 280);
      vertex(400, 250);
      vertex(420, 280);
      vertex(440, 250);
      vertex(460, 280);
      vertex(480, 250);
      vertex(500, 400);
      endShape();
    } else if (this.hshape == 4) { //Bun hair; this has a top, which is rendered in the draw loop
      ellipse(400, 300, 100);
    } else {
      //Bald. No hair here!
    }
  }

}

// Like Hair, Mouth randomly generates one of 4 mouth options. They're all the same color — black at 50% opacity, so they look darker than the skin color.
class Mouth {
  constructor() {
    stroke(0);
    strokeWeight(3);
    this.mshape = round(random(3));
  }
  render() {
    fill('hsba(0, 0%, 0%, 0.5)');
    if (this.mshape == 0) { //Surprise mouth
      ellipse(400, 450, 15);
    } else if (this.mshape == 1) { //Shock mouth
      arc(400, 460, 40, 20, PI, 2 * PI, CHORD)
    } else if (this.mshape == 2) { //Big smile
      arc(400, 450, 50, 30, 2 * PI, PI, CHORD)
    } else { //Small smile
      noFill();
      beginShape();
      curveVertex(370, 400);
      curveVertex(370, 450);
      curveVertex(430, 450);
      curveVertex(430, 400);
      endShape();
    }
  }
}

// Like Hair and Mouth, Nose randomly generates one of 5 nose options. They're all the same color — black at 20% opacity, so they look slightly darker than the skin color.
class Nose {
  constructor() {
    stroke(0);
    strokeJoin(ROUND);
    this.nshape = round(random(4))
  }

  render() {
    strokeWeight(2);
    fill('hsba(0, 0%, 0%, 0.2)');
    if (this.nshape == 0) { //Wide nose
      beginShape();
      curveVertex(397, 410);
      curveVertex(393, 395);
      curveVertex(407, 395);
      curveVertex(415, 430);
      curveVertex(385, 430);
      curveVertex(393, 395);
      curveVertex(403, 410);
      endShape();
    } else if (this.nshape == 1) { //Long nose
      beginShape();
      curveVertex(397, 410);
      curveVertex(395, 395);
      curveVertex(405, 395);
      curveVertex(410, 425);
      curveVertex(400, 435);
      curveVertex(390, 425);
      curveVertex(395, 395);
      curveVertex(403, 410);
      endShape();
    } else if (this.nshape == 2) { //Short nose
      beginShape();
      curveVertex(397, 410);
      curveVertex(395, 405);
      curveVertex(405, 405);
      curveVertex(408, 415);
      curveVertex(413, 425);
      curveVertex(400, 435);
      curveVertex(388, 425);
      curveVertex(392, 415);
      curveVertex(395, 405);
      curveVertex(403, 410);
      endShape();
    } else { //Button nose
      ellipse(400, 425, 25, 18);
    }
  }
}