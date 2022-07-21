const calculator = require('../jsmodules/calculator');
describe('calculator', () => {
    describe('add', () => {
      test('1 + 16 = 17', () => {  
        expect(calculator.add(1, 16)).toBe(17);
      });
  
      test('3 + 6 = 9', () => {  
        expect(calculator.add(3, 6)).toBe(9);
      });
  
      test('1 + 6 = 7', () => {
        expect(calculator.add(1, 6)).toBe(7);
      });
    });

    describe('subtract', () => {
        test('9 - 2 = 7', () => {  
          expect(calculator.subtract(9, 2)).toBe(7);
        });
    
        test('7 - 0 = 7', () => {  
          expect(calculator.subtract(7, 0)).toBe(7);
        });
    
        test('9 - 3 = 6', () => {
          expect(calculator.subtract(9, 3)).toBe(6);
        });
      });

      describe('multiply', () => {
        test('9 * 1 = 9', () => {  
          expect(calculator.multiply(9, 1)).toBe(9);
        });
    
        test('1 * 1 = 1', () => {  
          expect(calculator.multiply(1, 1)).toBe(1);
        });
    
        test('6 * 2 = 12', () => {
          expect(calculator.multiply(6, 2)).toBe(12);
        });
      });

      describe('divide', () => {
        test('12/ 2 = 6', () => {  
          expect(calculator.divide(12, 2)).toBe(6);
        });
        test('9 / 9 = 1', () => {  
            expect(calculator.divide(9, 9)).toBe(1);
          });
          test('18 / 2 = 9', () => {  
            expect(calculator.divide(18, 2)).toBe(9);
          });     
      });
});