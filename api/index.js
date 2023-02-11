const express = require('express');
const Jimp = require('jimp');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello ihapi!'));

app.post('/', express.json(), (req, res) =>{
    var data = req.body;
    Jimp.read(data.image,
    (err, img) => {
        if (err) throw err; 
        if(data.resize){img.resize(Number(data.resize[0]) ?? Jimp.AUTO, Number(data.resize[1]) ?? Jimp.AUTO)};
        if(data.autocrop){img.autocrop()};
        if(data.greyscale){img.greyscale()}
        if(data.blur){img.blur(Number(data.blur))}
        if(data.posterize){img.posterize(Number(data.posterize))}
        if(data.sepia){img.sepia()}
        if(data.invert){img.invert()}
        if(data.brightness){img.brightness(Number(data.brightness))}
        if(data.contrast){img.contrast(Number(data.contrast))}
        if(data.normalize){img.normalize()}
        if(data.gaussian){img.gaussian(Number(data.gaussian))}
        if(data.flip){img.flip(data.flip[0], data.flip[1])}
        if(data.mirror){img.mirror(data.mirror[0], data.mirror[1])}
        img.getBuffer(img.getMIME(), (err, buffer) => {
            const b64 = Buffer.from(buffer).toString('base64');
            const mimeType = img.getMIME(); // e.g., image/png
            res.send(`<img src="data:${mimeType};base64,${b64}" />`);
        })
    });
});
app.listen(port, () => console.log(`IHapi Listening on port ${port}!`))
module.exports = app;
