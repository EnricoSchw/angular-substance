const express = require('express');
const path = require('path');
import serve from './../node_modules/substance-texture/src/dar-server/serve.js';
const server = express();
const rootDir = './';
const archiveDir = path.resolve(path.join(__dirname, rootDir, 'data'));
const port = 3000;


console.log('archiev', archiveDir);
serve(server, {
    port,
    serverUrl: 'http://localhost:' + port,
    rootDir: archiveDir,
    apiUrl: '/archives'
});


server.listen(3000, function () {
    console.log('Server listening on port 3000!');
});
