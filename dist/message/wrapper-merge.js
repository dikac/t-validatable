(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../value/readonly-merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("../value/readonly-merge");
    /**
     * merge {@link Value}, {@link Message} and {@link Validatable}
     */
    class WrapperMerge extends readonly_merge_1.default {
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