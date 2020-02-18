(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/type", "@dikac/t-object/boolean/type", "@dikac/t-object/boolean/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../boolean/type");
    const type_2 = require("@dikac/t-object/boolean/type");
    const empty_1 = require("@dikac/t-object/boolean/empty");
    function Result(record, valid) {
        let result = {};
        for (let property in record) {
            const value = record[property];
            if (type_1.default(value)) {
                if (value.valid === valid) {
                    result[property] = value;
                }
            }
            else if (type_2.default(value)) {
                const results = Result(value, valid);
                if (!empty_1.default(results)) {
                    result[property] = results;
                }
            }
            else {
                throw new Error(`property ${property} is not type of Validatable, or record of Validatable`);
            }
        }
        return result;
    }
    exports.default = Result;
});
//# sourceMappingURL=result.js.map