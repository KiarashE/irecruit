var assert = require('assert');

describe('test', function () {

    it('firstname', function () {
        assert.equal('a', 'a');
    });

    it('Any errors', function () {
        assert.throws(function () {
            throw 'Error!';
        });
    });
});