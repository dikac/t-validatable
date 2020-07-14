(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./throwable/validatable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("./throwable/validatable");
    /**
     * Throw exception if given value is not {@link Validatable} type
     */
    function Valid(value, error = validatable_1.default) {
        if (!value.valid) {
            throw error(value.value, value.message);
        }
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map