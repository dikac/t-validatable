(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/record", "./type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const record_1 = require("@dikac/t-object/boolean/record");
    const type_1 = require("./type");
    function Record(record) {
        return record_1.default(record, type_1.default);
    }
    exports.default = Record;
});
//# sourceMappingURL=record.js.map