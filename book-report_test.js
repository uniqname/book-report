var assert = require('chai').assert,
    bookReport = require('./book-report'),
    ini = require('ini');

describe('Simple use', function () {
    it('should return a bit of a poem', function () {
        bookReport('./what-might-have-been.txt').then(function (poem) {

            assert.strictEqual(poem, 'For of all sad words of tongue or pen,\n' +
                                     'The saddest are these: "It might have been!"');
        });
    });
});

describe('Parsing', function () {
    it('should return a JavaScript object parsed from an ini file', function () {

        bookReport('./.git/config', ini.parse).then(function (config) {
            assert.deepProperty(config, '[branch "master"].remote');
        });
    });
});
