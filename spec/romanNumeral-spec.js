import { romanNumeral } from './../src/romanNumeral.js';

describe('romanNumeral', function() {
    it('should correctly calculate ones place', function() {
        var value = new romanNumeral("5");
        expect(value.calcRomanNumeral()).toEqual("V");
    })
    it('should correctly calculate the tens place', function() {
        var value = new romanNumeral("10");
        expect(value.calcRomanNumeral()).toEqual("X");
    });
    it('should correctly calculate the hundreds place', function() {
        var value = new romanNumeral("101");
        expect(value.calcRomanNumeral()).toEqual("CI");
    });
    it('should correctly calculate the thousands place', function() {
        var value = new romanNumeral("1100");
        expect(value.calcRomanNumeral()).toEqual("MC");
    });
    it('should correctly calculate 444', function() {
        var value = new romanNumeral("444");
        expect(value.calcRomanNumeral()).toEqual("CDXLIV");
    });
    it('should correctly calculate 999', function() {
        var value = new romanNumeral("999");
        expect(value.calcRomanNumeral()).toEqual("CMXCIX");
    });
})