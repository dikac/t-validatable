(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_1 = require("../wrapper");
    class Value extends wrapper_1.default {
        constructor(validatable, _value, _exceptionFactory = (message) => new Error(message)) {
            super(validatable);
            this._value = _value;
            this._exceptionFactory = _exceptionFactory;
        }
        get value() {
            if (!this.validatable.valid) {
                throw new Error();
            }
            return this._value;
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=asserted.js.map