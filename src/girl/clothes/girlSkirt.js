class GirlSkirt{
    constructor() {}

    girlsSkirt(pose_){

        let skirtWidth = 10;

        let leftHip = pose_.leftHip;
        let rightHip = pose_.rightHip;

        let midx = rightHip.x
        let midy = rightHip.y
        // ellipse(leftHip.x+skirtWidth, leftHip.y,30);

        
        let pantx = 10
        let panty = 80

        fill(52, 54, 47);
        stroke(0)
        strokeWeight(5);
        beginShape();
        curveVertex(leftHip.x+pantx,leftHip.y-panty);
        curveVertex(rightHip.x-pantx,rightHip.y-panty);
        curveVertex(rightHip.x-pantx-skirtWidth,rightHip.y);
        // curveVertex(rightHip.x-pantx-skirtWidth+20,rightHip.y-20);
        // curveVertex(rightHip.x-pantx-skirtWidth+20+20,rightHip.y+20)
        // curveVertex(rightHip.x-pantx-skirtWidth+20+20+20,rightHip.y-20)


        let iWidth = 20;
        for(let i=1;i<leftHip.x/60;i++){
            if(i%2==0){
                curveVertex(rightHip.x-pantx-skirtWidth+iWidth,rightHip.y+20);
            }else{
                curveVertex(rightHip.x-pantx-skirtWidth+iWidth,rightHip.y-20);
            }
            iWidth+=20
        }

        curveVertex(leftHip.x+pantx+skirtWidth,leftHip.y);
        endShape(CLOSE);
    }
}