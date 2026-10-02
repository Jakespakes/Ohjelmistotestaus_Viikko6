import { divide } from '../src/calculator.js'

describe('divide', () => {
    it('divides two positive numbers', () => {
        expect(divide(2, 1)).toBe(2);
    });

    it('throws when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow(RangeError);
    });

    it('throws when a is not a number', () => {
        expect(() => divide("1", 0)).toThrow(TypeError);
    });

    it('throws when b is not a number', () => {
        expect(() => divide(1, "0")).toThrow(TypeError);
    });

    it('throws when b is left empty', () => {
        expect(() => divide(6, )).toThrow(TypeError);
    })
})