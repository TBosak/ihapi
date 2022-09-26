const express = require('express');
const Jimp = require('jimp');
const bodyParser = require('body-parser')

const app = express();
var jsonParser = bodyParser.json()
const port = 3000;

app.post('/', jsonParser, (req, res) =>{
    Jimp.read(req.body.image,
    (err, img) => {
        if (err) throw err; 
        if(req.body.resize){img.resize(req.body.resize[0] ?? Jimp.AUTO, req.body.resize[1] ?? Jimp.AUTO)};
        if(req.body.greyscale){img.greyscale()}
        img.getBuffer(img.getMIME(), (err, buffer) => {
            const b64 = Buffer.from(buffer).toString('base64');
            const mimeType = img.getMIME(); // e.g., image/png
            res.send(`<img src="data:${mimeType};base64,${b64}" />`);
        })
    });
});
app.listen(port, () => console.log(`IHapi Listening on port ${port}!`))