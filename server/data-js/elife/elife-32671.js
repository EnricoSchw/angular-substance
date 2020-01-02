const manifest = require('./manifest');
const manuscript = require('./manuscript');
const fig1 = require('./fig1');
const fig2 = require('./fig2');
const fig3 = require('./fig3');
const fig4 = require('./fig4');
const fig5 = require('./fig5');

const elife = {
    'version': 1,
    'resources': {
        'manifest.xml': manifest,
        'manuscript.xml': manuscript,
        'fig1.jpg': fig1,
        'fig2.jpg': fig2,
        'fig3.jpg': fig3,
        'fig4.jpg': fig4,
        'fig5.jpg': fig5,
    }
};

module.exports = elife;
