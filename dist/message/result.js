(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Result {
        constructor(validatable, messageFactory) {
            this.validatable = validatable;
            this.messageFactory = messageFactory;
        }
        get valid() {
            return this.validatable.valid;
        }
        get message() {
            return this.messageFactory();
        }
    }
    exports.default = Result;
});
//# sourceMappingURL=result.js.map