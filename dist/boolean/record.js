(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./type", "@dikac/t-object/boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("./type");
    const type_2 = require("@dikac/t-object/boolean/type");
    function Record_(record) {
        let valid = true;
        for (let property in record) {
            const value = record[property];
            if (type_1.default(value)) {
                valid = valid && value.valid;
            }
            else if (type_2.default(value)) {
                valid = valid && Record_(value);
            }
            else {
                throw new Error(`property ${property} is not type of Validatable, or record of Validatable`);
            }
        }
        return valid;
    }
    exports.default = Record_;
});
//# sourceMappingURL=record.js.map