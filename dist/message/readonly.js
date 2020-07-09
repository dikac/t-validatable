(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../value/readonly"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_1 = require("../value/readonly");
    class Readonly extends readonly_1.default {
        constructor(value, valid, _message) {
            super(value, valid);
            this._message = _message;
        }
        get message() {
            return this._message;
        }
    }
    exports.default = Readonly;
});
//# sourceMappingURL=readonly.js.map