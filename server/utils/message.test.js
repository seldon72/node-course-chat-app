var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('Generate Message', () => {
    it('should generate correct message object', () => {
        var msgFrom = 'Mom';
        var msgText = 'Get home now';
        var msgObject = generateMessage(msgFrom, msgText);

        expect(typeof msgObject).toBe('object');
        expect(msgObject.from).toEqual(msgFrom);
        expect(msgObject.text).toEqual(msgText);
        expect(typeof msgObject.createdAt).toBe('number');
    });
});

describe('Generate Location Message', () => {
    it('should generate correct location object', () => {
        var msgFrom = 'Dad';
        var msgLat = 100;
        var msgLon = 100;
        var msgUrl = `https://www.google.com/maps?q=${msgLat},${msgLon}`;
        var msgObject = generateLocationMessage(msgFrom, msgLat, msgLon);

        expect(typeof msgObject).toBe('object');
        expect(msgObject.from).toEqual(msgFrom);
        expect(msgObject.url).toEqual(msgUrl);
        expect(typeof msgObject.createdAt).toBe('number');
    });
});

