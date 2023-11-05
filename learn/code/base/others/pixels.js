class Pixels{

    createPixels(x,y) {
        capture.loadPixels();
        loadPixels();
        for (this.y = 0;y<height;y++){
            for (this.x=0;x<width;x++){
                index = (x+y*width)*4;
                pixels[index] = capture.pixels[index]; // for R
                pixels[index+1] = capture.pixels[index+1]; // for G
                pixels[index+2] = capture.pixels[index+2];; // for B
                pixels[index+3] = capture.pixels[index+3];; // for Transparency
            }
        }
        
        updatePixels();
        
    }
}