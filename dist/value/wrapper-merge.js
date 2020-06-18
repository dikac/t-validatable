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
    /**
     * merge {@link Value} and {@link Validatable}
     */
    class WrapperMerge {
        constructor(subjectValue, subjectValidatable) {
            this.subjectValue = subjectValue;
            this.subjectValidatable = subjectValidatable;
        }
        get valid() {
            return this.subjectValidatable.valid;
        }
        get value() {
            return this.subjectValue.value;
        }
    }
    exports.default = WrapperMerge;
});
//# sourceMappingURL=wrapper-merge.js.map