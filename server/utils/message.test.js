var expect = require('expect');

var {generateMessage} = require('./message')

describe('Generate Message', () => {
    it('should generate the correct message object', () => {
        var msgFrom = 'Mom';
        var msgText = 'Get home now';
        var msgObject = generateMessage(msgFrom, msgText);

        expect(typeof msgObject).toBe('object');
        expect(msgObject.from).toEqual(msgFrom);
        expect(msgObject.text).toEqual(msgText);
        expect(typeof msgObject.createdAt).toBe('number');
    });
});