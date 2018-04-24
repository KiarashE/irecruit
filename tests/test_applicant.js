var assert = require('assert');

describe('my feature function', function () {

    it('work', function () {
        assert.equal('A', 'A');
    });

    it('fails lika shit', function () {
        assert.throws(function () {
            throw 'Error!';
        });
    });
});