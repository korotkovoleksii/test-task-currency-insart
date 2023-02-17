import { checkNewRate } from './checkNewRate';


describe('compareNumbers', () => {
    it('returns true when the second number is within 10% of the first', () => {
        expect(checkNewRate(100, 110)).toBe(true);
        expect(checkNewRate(100, 90)).toBe(true);
        expect(checkNewRate(10, 11)).toBe(true);
        expect(checkNewRate(10, 9)).toBe(true);
    });

    it('returns false when the second number is more than 10% greater than the first', () => {
        expect(checkNewRate(100, 121)).toBe(false);
    });

    it('returns false when the second number is more than 10% smaller than the first', () => {
        expect(checkNewRate(100, 79)).toBe(false);
    });
});