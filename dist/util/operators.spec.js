import { expect } from 'chai';
import { operatorMap, comparisonOperatorsHash } from './operators.js';
describe('operatorMap', () => {
    it('should have correct mapping for equals operator', () => {
        expect(operatorMap['equals']).to.equal('===');
    });
    it('should have correct mapping for does_not_equal operator', () => {
        expect(operatorMap['does_not_equal']).to.equal('!==');
    });
    it('should have correct mapping for greater_than operator', () => {
        expect(operatorMap['greater_than']).to.equal('>');
    });
    it('should have correct mapping for less_than operator', () => {
        expect(operatorMap['less_than']).to.equal('<');
    });
});
describe('comparisonOperatorsHash', () => {
    it('should return true for less_than operator when a < b', () => {
        const result = comparisonOperatorsHash['<'](2, 5);
        expect(result).to.be.true;
    });
    it('should return false for less_than operator when a >= b', () => {
        const result = comparisonOperatorsHash['<'](5, 2);
        expect(result).to.be.false;
    });
    it('should return true for greater_than operator when a > b', () => {
        const result = comparisonOperatorsHash['>'](5, 2);
        expect(result).to.be.true;
    });
    it('should return false for greater_than operator when a <= b', () => {
        const result = comparisonOperatorsHash['>'](2, 5);
        expect(result).to.be.false;
    });
    it('should return true for !== operator when a !== b', () => {
        const result = comparisonOperatorsHash['!=='](2, 5);
        expect(result).to.be.true;
    });
    it('should return false for !== operator when a === b', () => {
        const result = comparisonOperatorsHash['!=='](5, 5);
        expect(result).to.be.false;
    });
    it('should return true for === operator when a === b', () => {
        const result = comparisonOperatorsHash['==='](5, 5);
        expect(result).to.be.true;
    });
    it('should return false for === operator when a !== b', () => {
        const result = comparisonOperatorsHash['==='](2, 5);
        expect(result).to.be.false;
    });
});
//# sourceMappingURL=operators.spec.js.map