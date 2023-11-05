class GhadiFace{
    constructor(){}

    ghadiFace(faceModel){
        let eye = new Eyes();
        let eyeBrow = new EyeBrow();
        let lips = new Lips();
        // let nose = new Nose();
        let hair = new Hairs();
        let ghadilogo_ = new GhadiLogo();


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
      
     
        eyeBrow.drawEyeBrow(faceModel.annotations,bestFitSize/1.5);
      
        // console.log(faceModel.annotations)
        let leftEye = scalePoint(faceModel.annotations.leftEyeUpper0[4]);
        let rightEye = scalePoint(faceModel.annotations.rightEyeUpper0[4]);
      
        eye.drawEye(leftEye,bestFitSize,0);
        eye.drawEye(rightEye,bestFitSize,0);
      
        // console.log(faceModel.annotations);
      
        // nose.drawNose(nose_,bestFitSize);
      
        lips.drawLips(faceModel.annotations);     
        
        hair.drawHairs(faceModel.annotations.silhouette,0);
        let nose_ = scalePoint(faceModel.annotations.noseTip[0]);
        ghadilogo_.ghadiLogo(nose_,bestFitSize);   
        
      }      
}