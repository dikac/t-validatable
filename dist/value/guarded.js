(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/throwable/validatable", "./readonly-wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("../assert/throwable/validatable");
    const readonly_wrapper_1 = require("./readonly-wrapper");
    /**
     * @inheritDoc {@link ReadonlyWrapper}
     *
     * throw exception when {@link Validatable} is in valid (false) when
     * accessing value {@link Value}
     */
    class Guarded extends readonly_wrapper_1.default {
        /**
         * @param subject
         * @param error
         */
        constructor(subject, error = validatable_1.default) {
            super(subject);
            this.error = error;
        }
        get value() {
            if (!this.valid) {
                throw this.error(this.subject.value, this.subject);
            }
            return this.subject.value;
        }
    }
    exports.default = Guarded;
});
//# sourceMappingURL=guarded.js.map