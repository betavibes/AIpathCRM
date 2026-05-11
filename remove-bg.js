const Jimp = require('jimp');

async function makeTransparent() {
    console.log("Loading image...");
    const image = await Jimp.read('public/logo-v2.png');
    
    console.log("Processing pixels...");
    // Make black background transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        const a = this.bitmap.data[idx + 3];
        
        // Define tolerance for "black" (0-255 scale)
        // If it's very dark (r,g,b all < 20)
        if (r < 25 && g < 25 && b < 25 && a > 0) {
            // Check neighbors to avoid eating into the logo too much, but for simplicity, just make it transparent
            this.bitmap.data[idx + 3] = 0; // Alpha = 0 (Transparent)
        }
    });

    console.log("Saving image...");
    await image.writeAsync('public/logo-v2-transparent.png');
    console.log("Done!");
}

makeTransparent().catch(console.error);
