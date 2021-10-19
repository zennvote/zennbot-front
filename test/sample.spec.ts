import * as testUtil from '../src/sample.util';

describe('sample test code', function () {
    it('sum function should return sum of arguments', function () {
        expect(testUtil.sum(1, 2, 3, 4, 5)).toBe(15);
    });
});
