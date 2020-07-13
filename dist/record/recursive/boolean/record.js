(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/record/recursive/boolean/type", "../../../boolean/validatable", "@dikac/t-object/key/boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("@dikac/t-object/record/recursive/boolean/type");
    const validatable_1 = require("../../../boolean/validatable");
    const type_2 = require("@dikac/t-object/key/boolean/type");
    /**
     * Check if {@param record} is record of {@link Validatable}
     * {@param property} also can be provided to validate property
     */
    function Record(record, property = type_2.default) {
        return type_1.default(record, validatable_1.default, property);
    }
    exports.default = Record;
});
//# sourceMappingURL=record.js.map