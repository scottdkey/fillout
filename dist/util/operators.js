"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparisonOperatorsHash = exports.operatorMap = void 0;
exports.operatorMap = {
    equals: '===',
    does_not_equal: '!==',
    greater_than: '>',
    less_than: '<'
};
exports.comparisonOperatorsHash = {
    '<': (a, b) => { return a < b; },
    '>': (a, b) => { return a > b; },
    '!==': (a, b) => { return a !== b; },
    '===': (a, b) => { return a === b; },
};
//# sourceMappingURL=operators.js.map