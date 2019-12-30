const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

const blank = require('./data/blank');
const elife = require('./data/elife-32671');


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

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

server.put('/archives/:archiveId', (req, res) => {
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


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
// Continue to JSON Server router
    next()
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running')
})
