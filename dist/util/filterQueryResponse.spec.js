import { filterQueryResponse } from "./filterQueryResponse.js";
import { expect } from "chai";
describe("filterQueryResponse", () => {
    it("should filter for stuff", () => {
        const queryResponse = {
            responses: [{
                    submissionId: "",
                    submissionTime: "",
                    lastUpdatedAt: "",
                    questions: [{
                            id: "testId",
                            name: "testName",
                            type: "String",
                            value: "stuff"
                        }],
                    calculations: [],
                    urlParameters: [],
                    quiz: {}
                }, {
                    submissionId: "",
                    submissionTime: "",
                    lastUpdatedAt: "",
                    questions: [{
                            id: "testId",
                            name: "testName",
                            type: "String",
                            value: "stuff2"
                        }],
                    calculations: [],
                    urlParameters: [],
                    quiz: {}
                }],
            totalResponses: 2,
            pageCount: 1
        };
        const filters = [{
                id: "testId",
                condition: "equals",
                value: "stuff"
            }];
        const filtered = filterQueryResponse(queryResponse, filters);
        expect(filtered.responses.length).to.eql(1);
        expect(filtered.responses[0].questions[0].value).to.eql('stuff');
        expect(filtered.pageCount).to.eql(1);
        expect(filtered.totalResponses).to.eql(1);
    });
    it("should filter for dates before today", () => {
        const queryResponse = {
            responses: [{
                    submissionId: "",
                    submissionTime: "",
                    lastUpdatedAt: "",
                    questions: [{
                            id: "testId",
                            name: "testName",
                            type: "DatePicker",
                            value: "2024-01-16T23:20:05.324Z"
                        }],
                    calculations: [],
                    urlParameters: [],
                    quiz: {}
                }, {
                    submissionId: "",
                    submissionTime: "",
                    lastUpdatedAt: "",
                    questions: [{
                            id: "testId",
                            name: "testName",
                            type: "DatePicker",
                            value: "2024-05-16T23:20:05.324Z"
                        }],
                    calculations: [],
                    urlParameters: [],
                    quiz: {}
                }],
            totalResponses: 2,
            pageCount: 1
        };
        const filters = [{
                id: "testId",
                condition: "less_than",
                value: new Date().toISOString()
            }];
        const filtered = filterQueryResponse(queryResponse, filters);
        expect(filtered.responses.length).to.eql(1);
        expect(filtered.pageCount).to.eql(1);
        expect(filtered.totalResponses).to.eql(1);
    });
    it("should filter for numbers correctly", () => {
        const queryResponse = {
            responses: [{
                    submissionId: "",
                    submissionTime: "",
                    lastUpdatedAt: "",
                    questions: [{
                            id: "testId",
                            name: "testName",
                            type: "NumberInput",
                            value: 1
                        }],
                    calculations: [],
                    urlParameters: [],
                    quiz: {}
                }, {
                    submissionId: "",
                    submissionTime: "",
                    lastUpdatedAt: "",
                    questions: [{
                            id: "testId",
                            name: "testName",
                            type: "NumberInput",
                            value: 10
                        }],
                    calculations: [],
                    urlParameters: [],
                    quiz: {}
                }],
            totalResponses: 2,
            pageCount: 1
        };
        const filters = [{
                id: "testId",
                condition: "greater_than",
                value: 5
            }];
        const filtered = filterQueryResponse(queryResponse, filters);
        expect(filtered.responses.length).to.eql(1);
        expect(filtered.pageCount).to.eql(1);
        expect(filtered.totalResponses).to.eql(1);
    });
    it("should handle multiple filters", () => {
        const queryResponse = {
            responses: [{
                    submissionId: "",
                    submissionTime: "",
                    lastUpdatedAt: "",
                    questions: [{
                            id: "testId",
                            name: "testName",
                            type: "NumberInput",
                            value: 1
                        }, {
                            id: "testId2",
                            name: "testName2",
                            type: "DatePicker",
                            value: "2024-06-16T23:20:05.324Z"
                        }],
                    calculations: [],
                    urlParameters: [],
                    quiz: {}
                }, {
                    submissionId: "",
                    submissionTime: "",
                    lastUpdatedAt: "",
                    questions: [{
                            id: "testId",
                            name: "testName",
                            type: "NumberInput",
                            value: 10
                        }, {
                            id: "testId2",
                            name: "testName2",
                            type: "DatePicker",
                            value: "2024-02-16T23:20:05.324Z"
                        }],
                    calculations: [],
                    urlParameters: [],
                    quiz: {}
                }],
            totalResponses: 2,
            pageCount: 1
        };
        const filters = [{
                id: "testId",
                condition: "less_than",
                value: 5
            }, {
                id: "testId2",
                condition: "greater_than",
                value: new Date().toISOString()
            }];
        const filtered = filterQueryResponse(queryResponse, filters);
        expect(filtered.responses.length).to.eql(1);
        expect(filtered.pageCount).to.eql(1);
        expect(filtered.totalResponses).to.eql(1);
    });
});
//# sourceMappingURL=filterQueryResponse.spec.js.map