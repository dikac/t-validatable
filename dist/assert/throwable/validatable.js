(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/validatable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("../string/validatable");
    function Validatable(value, subject = '') {
        return new Error(validatable_1.default(false, value, subject));
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map