const express = require('express');
const formData = require("express-form-data");
const server = express();

const options = {
    uploadDir: './tmp',
    autoClean: true
};

// parse data with connect-multiparty.
server.use(formData.parse(options));
// delete from the request all empty files (size == 0)
server.use(formData.format());
// change the file objects to fs.ReadStream
server.use(formData.stream());
// union the body and the files
server.use(formData.union());


// server.use(express.urlencoded());
const blank = require('./data-js/blank/blank');
const elife = require('./data-js/elife/elife-32671');



// Add custom routes before JSON Server router
server.get('/archives/:archiveId', (req, res) => {
    const archiveId = req.params.archiveId;
    let response;
    switch (archiveId) {
        case "blank":
            response = blank;
            break;
        case "elife-32671":
            response = elife;
            break;
        default:
            response = blank;
    }
    res.jsonp(response);
});

server.put('/archives/:archiveId',  (req, res) => {
    const formData = req.body;


    // console.log('data',req.body);
    // console.log('undefined',req.undefined);
    // console.log('file',req.files);
    // console.log('params',req.params);

    const archiveId = req.params.archiveId;
    let response;
    switch (archiveId) {
        case "blank":
            response = blank;
            break;
        case "elife-32671":
            response = elife;
            break;
        default:
            response = blank;
    }
    res.status(200).jsonp(response);
});

server.use('/archives/elife-32671/assets', express.static(__dirname +  '/data-js/elife/assets'));

server.listen(3000, function () {
    console.log('Server listening on port 3000!');
});
