import { Jimp } from "jimp";

async function removeWhiteBackground() {
  try {
    const image = await Jimp.read('public/logo.png');
    
    // Iterate through each pixel
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      // Get the RGBA values
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      // If the pixel is white (or very close to white)
      if (red > 240 && green > 240 && blue > 240) {
        // Set alpha to 0 (transparent)
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await image.write('public/logo-transparent.png');
    console.log('Background removed successfully!');
  } catch (error) {
    console.error('Error removing background:', error);
  }
}

removeWhiteBackground();
