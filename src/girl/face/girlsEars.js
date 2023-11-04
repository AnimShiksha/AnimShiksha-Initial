class GirlsEars{

    constructor(){}

    girlEars(faceSillhouette){
        let ears = faceSillhouette.silhouette;
        let count = 0;
              
        // fill(255, 204, 153); // Skin color
        // stroke(5);
        // beginShape();
        // for(let fotl of ears){
        //     if( count> 6){
        //   fotl = scalePoint(fotl);
        //   ellipse(fotl.x, fotl.y,10,10);
        //     }
        //   count+=1
        //   if(count === 10){
        //     break;
        //   }
        // }
        // endShape(CLOSE);


        fill(255, 204, 153); // Skin color
        beginShape();
        vertex(scalePoint(ears[7]).x, scalePoint(ears[7]).y);
        vertex(scalePoint(ears[7]).x+30, scalePoint(ears[7]).y);
        vertex(scalePoint(ears[9]).x, scalePoint(ears[9]).y);

        endShape();

        
        beginShape();
        vertex(scalePoint(ears[27]).x, scalePoint(ears[27]).y);
        vertex(scalePoint(ears[27]).x-30, scalePoint(ears[27]).y);
        vertex(scalePoint(ears[29]).x, scalePoint(ears[29]).y);

        endShape();
    }

}