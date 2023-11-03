let capture;
let vid_for_me;
let constraints = {
    video: {
      mandatory: {
        minWidth: 1280,
        minHeight: 720
      },
      optional: [{ maxFrameRate: 10 }]
    },
  //   audio: true
};
let snapeshot = [];


function setup(){
    createCanvas(1280, 720);
    background(232);
    
      capture = createCapture(constraints, function(stream) {
        console.log(stream);
      });
      capture.hide();
      vid_for_me = createCapture(constraints, function(stream) {
          console.log(stream);
        });
    vid_for_me.size(600,400);
    button = createButton('click me');
    button.position(width+10, 20);
    button.size(100,100);
    button.mousePressed(takeSnape);
    
}


function takeSnape(){
    snapeshot.push(capture.get());
}
function draw(){
    // tint(v1, [v2], [v3], [a])
    x = 0;
    y = 0;
    w = 200;
    h = 160
    for(var i = 0;i < snapeshot.length;i++){
        image(snapeshot[i],x,y, w, h);
        x = x +w ;
        if (x > width){
            x =0;
            y = y +h
        }

    }
}

