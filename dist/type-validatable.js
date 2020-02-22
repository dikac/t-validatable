(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_1 = require("./wrapper");
    class TypeWrapper extends wrapper_1.default {
        constructor(validatable, type) {
            super(validatable);
            this.type = type;
        }
    }
    exports.default = TypeWrapper;
});
//# sourceMappingURL=type-validatable.js.map