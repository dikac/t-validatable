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
     * readonly wrapper for {@link Validatable}
     */
    class Wrapper {
        constructor(subject) {
            this.subject = subject;
        }
        get valid() {
            return this.subject.valid;
        }
    }
    exports.default = Wrapper;
});
//# sourceMappingURL=wrapper.js.map