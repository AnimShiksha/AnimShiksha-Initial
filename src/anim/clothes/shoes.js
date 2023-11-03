function shoes(poseLandmarks){

    
    let leftKnee = poseLandmarks.leftKnee;

    let rightKnee = poseLandmarks.rightKnee;
    let shoeHeight = 20

    fill(22,33,33);
    ellipse(leftKnee.x, leftKnee.y, shoeHeight, 30);
    ellipse(leftKnee.x+140, leftKnee.y, shoeHeight, 30);
    
    rect(leftKnee.x+11,leftKnee.y, leftKnee.y-shoeHeight, 25);
    ellipse(leftKnee.x-25, leftKnee.y+10, shoeHeight, 30);
    rect(leftKnee.x+110, leftKnee.y, shoeHeight, 25);
    ellipse(leftKnee.x+160,leftKnee.y+10, shoeHeight, 30);

    ellipse(rightKnee.x, rightKnee.y, shoeHeight, 30);
    ellipse(rightKnee.x+140, rightKnee.y, shoeHeight, 30);

    rect(rightKnee.x+11,rightKnee.y, rightKnee.y-shoeHeight, 25);
    ellipse(rightKnee.x-25, rightKnee.y+10, shoeHeight, 30);
    rect(rightKnee.x+110, rightKnee.y, shoeHeight, 25);
    ellipse(rightKnee.x+160,rightKnee.y+10, shoeHeight, 30);
}