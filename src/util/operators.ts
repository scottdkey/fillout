export const operatorMap = {
  equals: '===',
  does_not_equal: '!==',
  greater_than: '>',
  less_than: '<'
};

export const comparisonOperatorsHash: { [key: string]: (a: any, b: any) => boolean } = {
  '<': (a: any, b: any) => { return a < b; },
  '>': (a: any, b: any) => { return a > b; },
  '!==': (a: any, b: any) => { return a !== b },
  '===': (a: any, b: any) => { return a === b; },
};