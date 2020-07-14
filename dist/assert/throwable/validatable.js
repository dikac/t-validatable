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
    function Validatable(number) {
        return new Error(validatable_1.default(number, false));
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map