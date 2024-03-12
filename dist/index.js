"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const filterQueryResponse_1 = require("./util/filterQueryResponse");
const getDataFromFillOut_1 = require("./util/getDataFromFillOut");
dotenv_1.default.config();
const port = 3000;
const app = (0, express_1.default)();
app.get("/:formId/filteredResponses", async (req, res) => {
    try {
        const data = await (0, getDataFromFillOut_1.getDataFromFillOut)(req);
        if (req.query.filters) {
            const filters = JSON.parse(req.query.filters);
            const filtered = (0, filterQueryResponse_1.filterQueryResponse)(data, filters);
            res.send(filtered);
        }
        else {
            res.send(data);
        }
    }
    catch (e) {
        console.error(e, 'app error');
        res.send({ message: e.message || "error occurred" }).status(e.status || 500);
    }
});
app.listen(port, () => {
    console.log(`listening on localhost:${port}`);
});
//# sourceMappingURL=index.js.map