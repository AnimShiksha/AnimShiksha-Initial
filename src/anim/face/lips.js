class Lips{
    constructor(){}
    drawLips(mouthLandmarks){
      fill(255);
      beginShape();
      for(let pt of mouthLandmarks.lipsUpperInner){
        pt = scalePoint(pt);
        // ellipse(pt.x,pt.y,10,10);
        vertex(pt.x,pt.y)
      }
      endShape();
    
    
    
      stroke(0);
      strokeWeight(2);
      fill(212, 55, 105);
      beginShape();
      let UpperLipsInner = mouthLandmarks.lipsUpperInner;
      curveVertex(scalePoint(UpperLipsInner[0]).x,scalePoint(UpperLipsInner[0]).y);
      curveVertex(scalePoint(UpperLipsInner[1]).x,scalePoint(UpperLipsInner[1]).y);
      curveVertex(scalePoint(UpperLipsInner[2]).x,scalePoint(UpperLipsInner[2]).y);
      curveVertex(scalePoint(UpperLipsInner[3]).x,scalePoint(UpperLipsInner[3]).y);
      curveVertex(scalePoint(UpperLipsInner[4]).x,scalePoint(UpperLipsInner[4]).y);
      curveVertex(scalePoint(UpperLipsInner[5]).x,scalePoint(UpperLipsInner[5]).y);
      curveVertex(scalePoint(UpperLipsInner[6]).x,scalePoint(UpperLipsInner[6]).y);
      curveVertex(scalePoint(UpperLipsInner[7]).x,scalePoint(UpperLipsInner[7]).y);
      curveVertex(scalePoint(UpperLipsInner[8]).x,scalePoint(UpperLipsInner[8]).y);
      curveVertex(scalePoint(UpperLipsInner[9]).x,scalePoint(UpperLipsInner[9]).y);
      curveVertex(scalePoint(UpperLipsInner[10]).x,scalePoint(UpperLipsInner[10]).y);
      
      let UpperLipsOuter = mouthLandmarks.lipsUpperOuter;
      // fill(22,33,44)
      curveVertex(scalePoint(UpperLipsOuter[9]).x,scalePoint(UpperLipsOuter[9]).y);
      curveVertex(scalePoint(UpperLipsOuter[8]).x,scalePoint(UpperLipsOuter[8]).y);
      curveVertex(scalePoint(UpperLipsOuter[7]).x,scalePoint(UpperLipsOuter[7]).y);
      curveVertex(scalePoint(UpperLipsOuter[6]).x,scalePoint(UpperLipsOuter[6]).y);
      curveVertex(scalePoint(UpperLipsOuter[5]).x,scalePoint(UpperLipsOuter[5]).y);
      curveVertex(scalePoint(UpperLipsOuter[4]).x,scalePoint(UpperLipsOuter[4]).y);
      curveVertex(scalePoint(UpperLipsOuter[3]).x,scalePoint(UpperLipsOuter[3]).y);
      curveVertex(scalePoint(UpperLipsOuter[2]).x,scalePoint(UpperLipsOuter[2]).y);
      curveVertex(scalePoint(UpperLipsOuter[1]).x,scalePoint(UpperLipsOuter[1]).y);
      // curveVertex(scalePoint(UpperLipsOuter[0]).x,scalePoint(UpperLipsOuter[0]).y);
    
      endShape(CLOSE);
        
    
      fill(212, 55, 105);
    
      beginShape();
      let lowerLipsInner = mouthLandmarks.lipsLowerInner;
      curveVertex(scalePoint(lowerLipsInner[0]).x,scalePoint(lowerLipsInner[0]).y);
      // ellipse(scalePoint(lowerLipsInner[1]).x,scalePoint(lowerLipsInner[1]).y,10,10)
      curveVertex(scalePoint(lowerLipsInner[1]).x,scalePoint(lowerLipsInner[1]).y);
      curveVertex(scalePoint(lowerLipsInner[2]).x,scalePoint(lowerLipsInner[2]).y);
      curveVertex(scalePoint(lowerLipsInner[3]).x,scalePoint(lowerLipsInner[3]).y);
      curveVertex(scalePoint(lowerLipsInner[4]).x,scalePoint(lowerLipsInner[4]).y);
      curveVertex(scalePoint(lowerLipsInner[5]).x,scalePoint(lowerLipsInner[5]).y);
      curveVertex(scalePoint(lowerLipsInner[6]).x,scalePoint(lowerLipsInner[6]).y);
      curveVertex(scalePoint(lowerLipsInner[7]).x,scalePoint(lowerLipsInner[7]).y);
      curveVertex(scalePoint(lowerLipsInner[8]).x,scalePoint(lowerLipsInner[8]).y);
      curveVertex(scalePoint(lowerLipsInner[9]).x,scalePoint(lowerLipsInner[9]).y);
      curveVertex(scalePoint(lowerLipsInner[10]).x,scalePoint(lowerLipsInner[10]).y);
      // ellipse(scalePoint(lowerLipsInner[10]).x,scalePoint(lowerLipsInner[10]).y,10,10)
    
      let lowerLipsOuter = mouthLandmarks.lipsLowerOuter;
      curveVertex(scalePoint(lowerLipsOuter[9]).x,scalePoint(lowerLipsOuter[9]).y);
      curveVertex(scalePoint(lowerLipsOuter[8]).x,scalePoint(lowerLipsOuter[8]).y);
      curveVertex(scalePoint(lowerLipsOuter[7]).x,scalePoint(lowerLipsOuter[7]).y);
      curveVertex(scalePoint(lowerLipsOuter[6]).x,scalePoint(lowerLipsOuter[6]).y);
      curveVertex(scalePoint(lowerLipsOuter[5]).x,scalePoint(lowerLipsOuter[5]).y);
      curveVertex(scalePoint(lowerLipsOuter[4]).x,scalePoint(lowerLipsOuter[4]).y);
      curveVertex(scalePoint(lowerLipsOuter[3]).x,scalePoint(lowerLipsOuter[3]).y);
      curveVertex(scalePoint(lowerLipsOuter[2]).x,scalePoint(lowerLipsOuter[2]).y);
      curveVertex(scalePoint(lowerLipsOuter[1]).x,scalePoint(lowerLipsOuter[1]).y);
      curveVertex(scalePoint(lowerLipsOuter[0]).x,scalePoint(lowerLipsOuter[0]).y);
      endShape(CLOSE);
    
    
      fill(255)
      beginShape();
      for(let pt of mouthLandmarks.lipsLowerInner){
        pt = scalePoint(pt);
        vertex(pt.x,pt.y)
      }
      endShape();
    }
  
  }
  
  
  