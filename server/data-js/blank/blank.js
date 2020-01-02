const blank = {
    'version': 1,
    'resources': {
        'manifest.xml': {
            'data': '<dar>\n' +
                '  <documents>\n' +
                '    <document id="manuscript" type="article" path="manuscript.xml" />\n' +
                '  </documents>\n' +
                '  <assets>\n' +
                '  </assets>\n' +
                '</dar>\n',
            'encoding':'utf8'
        },
        'manuscript.xml': {
            'data': '<?xml version="1.0" encoding="UTF-8"?>\n' +
                '<!DOCTYPE article PUBLIC "-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD v1.2 20190208//EN" "JATS-archivearticle1.dtd">\n' +
                '<article xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ali="http://www.niso.org/schemas/ali/1.0">\n' +
                '  <front>\n' +
                '    <article-meta>\n' +
                '      <title-group>\n' +
                '        <article-title />\n' +
                '      </title-group>\n' +
                '      <abstract />\n' +
                '    </article-meta>\n' +
                '  </front>\n' +
                '  <body />\n' +
                '  <back />\n' +
                '</article>',
            'encoding': 'utf8'
        }
    }
};

module.exports = blank;
