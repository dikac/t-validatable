(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../readonly"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_1 = require("../readonly");
    /**
     * read only wrapper for {@link Value} and {@link Validatable}
     */
    class Readonly extends readonly_1.default {
        constructor(_value, valid) {
            super(valid);
            this._value = _value;
        }
        get value() {
            return this._value;
        }
    }
    exports.default = Readonly;
});
//# sourceMappingURL=readonly.js.map