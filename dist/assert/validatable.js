(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/validatable", "./throwable/validatable", "@dikac/t-function/assert/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("../boolean/validatable");
    const validatable_2 = require("./throwable/validatable");
    const callback_1 = require("@dikac/t-function/assert/callback");
    /**
     * Throw exception if given value is not {@link Validatable} type
     */
    function Validatable(value, errorFactory = validatable_2.default) {
        callback_1.default(value, validatable_1.default, errorFactory);
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map