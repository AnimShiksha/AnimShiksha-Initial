class GirlsFace{
    constructor(){}

    girlsFace(faceModel){
        let eye = new GirlEyes();
        let eyeBrow = new GirlsEyeBrow();
        let bindi = new Bindi()
        let lips = new GirlsLips();
        let nose = new GirlsNose();
        let cheeks = new GirlCheeks();
        let hair = new GirlHair();
        let ears = new GirlsEars();

        let hairIMG_ = loadImage('artifacts/IMG_20230708_094132.jpg');

        // http://127.0.0.1:5500/web/girl/girlCamera.html
        // console.log(faceModel.boundingBox);
        let topLeft = scalePoint(faceModel.boundingBox.topLeft[0]);
        let bottomRight = scalePoint(faceModel.boundingBox.bottomRight[0]);
        let w = bottomRight.x - topLeft.x;
        
        let bestFitSize = w/6
        let faceOutline = faceModel.annotations.silhouette;
      
        fill(255, 204, 153); // Skin color
        stroke(5);
        beginShape();
        for(let fotl of faceOutline){
          fotl = scalePoint(fotl)
          curveVertex(fotl.x, fotl.y)
        }
        endShape(CLOSE);

        // console.log(faceModel.annotations)

        hair.girlsHair(faceModel.annotations,hairIMG_)

        bindi.girlBindi(faceModel.annotations);
        eye.makeEyes(faceModel.annotations);
        nose.girlNose(faceModel.annotations);
        // cheeks.girlsCheeks(faceModel.annotations);
        lips.girlLips(faceModel.annotations);
        // ears.girlEars(faceModel.annotations);

        eyeBrow.girlsEyeBrow(faceModel.annotations,bestFitSize/1.5);
      
        
      }      
}


