export const operatorMap = {
    equals: '===',
    does_not_equal: '!==',
    greater_than: '>',
    less_than: '<'
};
export const comparisonOperatorsHash = {
    '<': (a, b) => { return a < b; },
    '>': (a, b) => { return a > b; },
    '!==': (a, b) => { return a !== b; },
    '===': (a, b) => { return a === b; },
};
//# sourceMappingURL=operators.js.map