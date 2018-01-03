const expect = require('expect');
const {isRealString} = require('./validation');

describe('Validate isRealString', () => {

    it('should reject non string values', () => {
        result = isRealString(2018);

        expect(result).toBeFalsy;
    });

    it('should reject string with only spaces', () => {
        result = isRealString('   ');

        expect(result).toBeFalsy;
    });

    it('should allow string with non-space characters', () => {
        result = isRealString('   Hari Seldon  ');

        expect(result).toBeTruthy;
    });
}); 