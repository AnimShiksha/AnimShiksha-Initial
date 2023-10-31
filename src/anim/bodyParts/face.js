
class Face {
  constructor() {
  }

        
    faceAnim(detectionsArry){
      if (detectionsArry.length > 0) {
        let points = detectionsArry[0].landmarks.positions;

        // FACE
        // endShape(CLOSE);
        fill(255, 204, 153); // Skin color
        beginShape();
                
        curveVertex(points[0]._x, points[0]._y);
        curveVertex(points[1]._x, points[1]._y);
        curveVertex(points[2]._x, points[2]._y);
        curveVertex(points[3]._x, points[3]._y);
        curveVertex(points[4]._x, points[4]._y);
        curveVertex(points[5]._x, points[5]._y);

        curveVertex(points[6]._x, points[6]._y);
        curveVertex(points[7]._x, points[7]._y);
        curveVertex(points[8]._x, points[8]._y);
        curveVertex(points[9]._x, points[9]._y);
        curveVertex(points[10]._x, points[10]._y);
        curveVertex(points[11]._x, points[11]._y);
        curveVertex(points[12]._x, points[12]._y);
        curveVertex(points[13]._x, points[13]._y);
        curveVertex(points[14]._x, points[14]._y);
        curveVertex(points[15]._x, points[15]._y);
        curveVertex(points[15]._x, points[15]._y);

        // connecting face with forehead(Eyebrows)
        let headHight = 1.15
        curveVertex(points[16]._x, points[16]._y);
        curveVertex(points[16]._x, points[16]._y);
        // curveVertex(points[26]._x*1.035, points[26]._y); // this is to smooth the line
        curveVertex(points[26]._x, points[26]._y/headHight);
        curveVertex(points[25]._x, points[25]._y/headHight);
        curveVertex(points[24]._x, points[24]._y/headHight);
        curveVertex(points[23]._x, points[23]._y/headHight);
        curveVertex(points[20]._x, points[20]._y/headHight);
        curveVertex(points[19]._x, points[19]._y/headHight);
        curveVertex(points[18]._x, points[18]._y/headHight);
        curveVertex(points[17]._x, points[17]._y/headHight);
        // curveVertex(points[17]._x/1.035, points[17]._y); // this is to smooth the line
        endShape(CLOSE);

        
        // Hair
        let yUp = 50
        let yDown = 40
        fill(0);
        beginShape();
        vertex(points[26]._x, points[26]._y/headHight);
        for(let i=26;i > 17;i--){
          if(i%2==0){
            vertex(points[i]._x, points[i]._y/headHight-yUp);
          } else{
            vertex(points[i]._x, points[i]._y/headHight-yDown);
          }
        }
        vertex(points[17]._x, points[17]._y/headHight);

        endShape(CLOSE);


        // Right eyebrow
        fill(0, 0, 0); // Black color
        beginShape();
        for (let j = 17; j < 22; j++) {
          curveVertex(points[j]._x, points[j]._y);
        }
        endShape();

        // Left eyebrow
        beginShape();
        for (let j = 22; j < 27; j++) {
          curveVertex(points[j]._x, points[j]._y);
        }
        endShape();

        // Draw nose upper line
        beginShape();
        for (let j = 27; j < 31; j++) {
          vertex(points[j]._x, points[j]._y);
        }
        endShape();

        // Draw nose down line
        beginShape();
        for (let j = 31; j < 36; j++) {
          vertex(points[j]._x, points[j]._y);
        }
        endShape();

        // Draw right eye
        fill(0, 0, 0); // Black color
        beginShape();
        for (let j = 36; j < 42; j++) {
          vertex(points[j]._x, points[j]._y);
        }
        endShape(CLOSE);

        // Draw left eye
        beginShape();
        for (let j = 42; j < 48; j++) {
          vertex(points[j]._x, points[j]._y);
        }
        endShape(CLOSE);

        // Upper Lip
        fill(255, 51, 102); // Pink color
        beginShape();
        curveVertex(points[48]._x, points[48]._y);
        curveVertex(points[49]._x, points[49]._y);
        curveVertex(points[50]._x, points[50]._y);
        curveVertex(points[51]._x, points[51]._y);
        curveVertex(points[52]._x, points[52]._y);
        curveVertex(points[53]._x, points[53]._y);
        curveVertex(points[54]._x, points[54]._y);
        curveVertex(points[63]._x, points[63]._y);
        curveVertex(points[62]._x, points[62]._y);
        curveVertex(points[61]._x, points[61]._y)
        endShape(CLOSE);

        // Lower Lip
        // fill(0);
        beginShape();
        curveVertex(points[64]._x, points[64]._y);
        curveVertex(points[55]._x, points[55]._y);
        curveVertex(points[56]._x, points[56]._y);
        curveVertex(points[57]._x, points[57]._y);
        curveVertex(points[58]._x, points[58]._y);
        curveVertex(points[59]._x, points[59]._y);
        curveVertex(points[60]._x, points[60]._y);
        curveVertex(points[67]._x, points[67]._y);
        curveVertex(points[66]._x, points[66]._y);
        curveVertex(points[65]._x, points[65]._y);
        endShape(CLOSE);

      }
    }
}


