"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrl = void 0;
const zod_1 = require("zod");
const getUrl = (req) => {
    const formId = zod_1.z.string().parse(req.params.formId);
    if (!formId) {
        throw {
            status: 400,
            message: "no formId passed"
        };
    }
    let url = `https://api.fillout.com/v1/api/forms/${formId}/submissions`;
    let hasOneParam = false;
    if (Object.keys(req.query).length > 0) {
        for (const [key, value] of Object.entries(req.query)) {
            const queryParam = `${key}=${value}`;
            url = url + `${hasOneParam ? "&" : "?"}${queryParam}`;
            hasOneParam = true;
        }
    }
    return url;
};
exports.getUrl = getUrl;
//# sourceMappingURL=getUrl.js.map