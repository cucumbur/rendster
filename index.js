var Jimp = require("jimp");

const COLORS = {
  "BLACK" : Jimp.rgbaToInt(0, 0, 0, 255),
  "WHITE" : Jimp.rgbaToInt(255, 255, 255, 255),
  "RED" : Jimp.rgbaToInt(255, 0, 0, 255),
  "GREEN" : Jimp.rgbaToInt(0, 255, 0, 255),
  "BLUE" : Jimp.rgbaToInt(0, 0, 255, 255)
}


var renderImage = new Jimp(256, 256, Jimp.rgbaToInt(0, 0, 0, 255), function (err, image) {
    // this image is 256 x 256, every pixel is set to 0x00000000
});

testDraw(renderImage);
outputImage(renderImage);


function outputImage(image) {
  image.flip( false, true );
  image.write( "out.png", function(){} );
}

function testDraw(image) {
  line(10, 50, 255, 255, image, COLORS["RED"]);

}


function line(x0, y0, x1, y1, image, color) {
  for (let t = 0; t < 1; t += .01) {
    let x = (1-t) * x0 + t * x1;
    let y = (1-t) * y0 + t * y1;
    image.setPixelColor(color, x, y);
  }
}
