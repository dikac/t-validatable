(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../value/wrapper-merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_merge_1 = require("../value/wrapper-merge");
    class WrapperMerge extends wrapper_merge_1.default {
        constructor(subjectValue, subjectMessage, subjectValidatable) {
            super(subjectValue, subjectValidatable);
            this.subjectMessage = subjectMessage;
        }
        get message() {
            return this.subjectMessage.message;
        }
    }
    exports.default = WrapperMerge;
});
//# sourceMappingURL=wrapper-merge.js.map