import { classNames } from './classNames';

describe('classNames', () => {
    test('should return class name', () => {
        const result = classNames('test');

        expect(result).toBe('test');
    });

    test('should return class name with true modifiers', () => {
        const result = classNames('test', { red: true, green: false });

        expect(result).toBe('test red');
    });

    test('should return class name with additional name', () => {
        const result = classNames('test', {}, ['additional']);

        expect(result).toBe('test additional');
    });
});