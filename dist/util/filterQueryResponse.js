"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterQueryResponse = void 0;
const operators_1 = require("./operators");
const filterQueryResponse = (queryResponse, filters) => {
    const parsedFilters = filters.map(filter => {
        return {
            id: filter.id,
            condition: operators_1.operatorMap[filter.condition],
            value: filter.value
        };
    });
    const returnValue = queryResponse.responses.filter(qr => {
        let passedFilters = 0;
        let questions = qr.questions;
        for (const filter of parsedFilters) {
            const hasValue = questions.find(q => q.id === filter.id);
            if (hasValue) {
                let currentValue = hasValue.value;
                let incomingValue = filter.value;
                if (hasValue.type === "DatePicker") {
                    currentValue = new Date(currentValue).valueOf();
                    incomingValue = new Date(incomingValue).valueOf();
                }
                const condition = operators_1.comparisonOperatorsHash[filter.condition](hasValue.value, filter.value);
                if (condition === true) {
                    passedFilters++;
                }
            }
        }
        return passedFilters === filters.length;
    });
    return Object.assign(Object.assign({}, queryResponse), { responses: returnValue, totalResponses: returnValue.length });
};
exports.filterQueryResponse = filterQueryResponse;
//# sourceMappingURL=filterQueryResponse.js.map