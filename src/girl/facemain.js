class GirlsFace{
    constructor(){}

    girlsFace(faceModel){
        // let eye = new Eyes();
        let eyeBrow = new GirlsEyeBrow();
        // let lips = new Lips()
        // let nose = new Nose()
        // let hair = new Hairs()

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

        eyeBrow.girlsEyeBrow(faceModel.annotations,bestFitSize/1.5);
      
        
      }      
}


