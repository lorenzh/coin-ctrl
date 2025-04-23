import { describe, it, expect } from 'bun:test';
import { add, subtract, multiply, divide } from '../calculate';

describe('calculate module', () => {
  describe('add function', () => {
    it('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-2, 2)).toBe(0);
    });
  });

  describe('subtract function', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtract(10, 4)).toBe(6);
      expect(subtract(4, 10)).toBe(-6);
    });
  });

  describe('multiply function', () => {
    it('should multiply two numbers correctly', () => {
      expect(multiply(3, 5)).toBe(15);
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide function', () => {
    it('should divide two numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(-9, 3)).toBe(-3);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrowError('Cannot divide by zero');
    });
  });
});
