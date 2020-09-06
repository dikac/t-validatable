(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./throwable/valid", "../boolean/valid", "@dikac/t-function/assert/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const valid_1 = require("./throwable/valid");
    const valid_2 = require("../boolean/valid");
    const callback_1 = require("@dikac/t-function/assert/callback");
    /**
     * Throw exception if given value is not {@link ValidatableInterface} type
     */
    function Valid(value, error = valid_1.default) {
        callback_1.default(value, valid_2.default, error);
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map