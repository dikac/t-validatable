(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/type", "@dikac/t-object/record/filter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../boolean/type");
    const filter_1 = require("@dikac/t-object/record/filter");
    function Valid(record) {
        return filter_1.default(record, (v) => v.valid, type_1.default);
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map