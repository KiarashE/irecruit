var assert = require('assert');

describe('test', function () {

    it('work', function () {
        assert.equal('A', 'A');
    });

    it('fails', function () {
        assert.throws(function () {
            throw 'Error!';
        });
    });
});