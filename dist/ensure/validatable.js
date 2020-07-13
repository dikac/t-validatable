(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/throwable/validatable", "../assert/validatable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("../assert/throwable/validatable");
    const validatable_2 = require("../assert/validatable");
    /**
     * Throw exception if given value is no {@link Validatable} type
     *
     */
    function Validatable(value, errorFactory = validatable_1.default) {
        validatable_2.default(value, errorFactory);
        return value;
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map