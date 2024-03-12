"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataFromFillOut = void 0;
const getUrl_1 = require("./getUrl");
const getDataFromFillOut = async (req) => {
    const apiKey = process.env.API_KEY;
    const response = await fetch((0, getUrl_1.getUrl)(req), {
        headers: {
            "Authorization": `Bearer ${apiKey}`
        }
    });
    if (response.status >= 400) {
        console.error({
            status: response.status,
            statusText: response.statusText,
            message: "unable to get data from fillout",
            body: await response.text()
        });
        throw {
            status: response.status,
            message: "upstream failure"
        };
    }
    if (response.status === 200) {
        const data = await response.json();
        return data;
    }
    throw {
        status: 500,
        message: "something went wrong"
    };
};
exports.getDataFromFillOut = getDataFromFillOut;
//# sourceMappingURL=getDataFromFillOut.js.map