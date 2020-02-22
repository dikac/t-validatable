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
    /**
     * wrap standard validatable, and add type interface
     */
    class ValidatableWrapper extends wrapper_1.default {
        constructor(validatable, type) {
            super(validatable);
            this.type = type;
        }
    }
    exports.default = ValidatableWrapper;
});
//# sourceMappingURL=validatable-wrapper.js.map