(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../throwable/type", "./readonly-wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../throwable/type");
    const readonly_wrapper_1 = require("./readonly-wrapper");
    /**
     * @inheritDoc {@link Wrapper}
     *
     * throw exception when {@link Validatable} is in valid (false) when
     * accessing value {@link Value}
     */
    class Guarded extends readonly_wrapper_1.default {
        /**
         * @param subject
         * @param error
         */
        constructor(subject, error = type_1.default) {
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