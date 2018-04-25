var assert = require('assert');

describe('applicant test package', function () {

    it('firstname', function () {
        assert.equal('A', 'A');
    });

    it('Any errors', function () {
        assert.throws(function () {
            throw 'Error!';
        });
    });
});