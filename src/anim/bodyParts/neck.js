

// I have point 7 and 9 to connect neck from face.


class Neck{
    constructor(){}

    neckAnim(facecoordx,facecoordy,bodycoordx,bodycoordy,facecoordx1,facecoordy1,bodycoordx1,bodycoordy1){
        // noStroke();
        fill(255, 204, 153); // Skin color
        beginShape();
        curveVertex(facecoordx, facecoordy);
        curveVertex(facecoordx1, facecoordy1)
        curveVertex(bodycoordx1,bodycoordy1)
        curveVertex(bodycoordx,bodycoordy)
        endShape(CLOSE);
        // line(facecoordx, facecoordy, bodycoordx,bodycoordy);
        // line(facecoordx1, facecoordy1, bodycoordx1,bodycoordy1);

    }
}