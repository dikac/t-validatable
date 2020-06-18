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
     * read only wrapper for {@link Value} and {@link Validatable}
     */
    class Wrapper {
        constructor(subject) {
            this.subject = subject;
        }
        get valid() {
            return this.subject.valid;
        }
        get value() {
            return this.subject.value;
        }
    }
    exports.default = Wrapper;
});
//# sourceMappingURL=wrapper.js.map