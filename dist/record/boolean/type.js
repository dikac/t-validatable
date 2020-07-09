(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/record/boolean/type", "../../boolean/type", "@dikac/t-object/key/boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("@dikac/t-object/record/boolean/type");
    const type_2 = require("../../boolean/type");
    const type_3 = require("@dikac/t-object/key/boolean/type");
    /**
     * Check if {@param record} is record of {@link Validatable}
     * {@param property} also can be provided to validate property
     */
    function Type(record, property = type_3.default) {
        return type_1.default(record, type_2.default, property);
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map