class GirlsFace{
    constructor(){}

    girlsFace(faceModel){
        let eye = new GirlEyes();
        let eyeBrow = new GirlsEyeBrow();
        let bindi = new Bindi()
        let lips = new GirlsLips();
        let nose = new GirlsNose();
        let cheeks = new GirlCheeks();
        let hair = new GirlHairs();
        let ears = new GirlsEars();


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


        hair.girlsHair(faceOutline,bestFitSize/2,5)      
        bindi.girlBindi(faceModel.annotations);
        eye.makeEyes(faceModel.annotations,bestFitSize/3);
        nose.girlNose(faceModel.annotations,0,bestFitSize/1.2);
        // cheeks.girlsCheeks(faceModel.annotations);
        lips.girlLips(faceModel.annotations);
        // ears.girlEars(faceModel.annotations);

        eyeBrow.girlsEyeBrow(faceModel.annotations,bestFitSize/1.5);
        
      }      
}


