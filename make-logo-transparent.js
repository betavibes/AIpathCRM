const Jimp = require('jimp');

async function run() {
    const img = await Jimp.read('public/AIpath CRM LOGO.jpg');
    console.log('Width:', img.bitmap.width, 'Height:', img.bitmap.height);

    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
        const r = this.bitmap.data[idx];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];

        // Remove near-black background pixels
        if (r < 30 && g < 30 && b < 30) {
            this.bitmap.data[idx + 3] = 0; // fully transparent
        }
    });

    await img.writeAsync('public/aipath-crm-logo-clean.png');
    console.log('Done! Saved as aipath-crm-logo-clean.png');
}

run().catch(console.error);
