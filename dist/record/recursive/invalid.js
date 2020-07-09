(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/record/recursive/filter", "../../boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const filter_1 = require("@dikac/t-object/record/recursive/filter");
    const type_1 = require("../../boolean/type");
    /**
     * filter all invalid {@link Validatable} while retain its original structure
     */
    function Invalid(record) {
        return filter_1.default(record, type_1.default, (v) => !v.valid);
    }
    exports.default = Invalid;
});
//# sourceMappingURL=invalid.js.map