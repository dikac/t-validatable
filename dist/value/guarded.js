(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./wrapper", "../throwable/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_1 = require("./wrapper");
    const type_1 = require("../throwable/type");
    /**
     * @inheritDoc {@link Wrapper}
     *
     * throw exception when {@link Validatable} is in valid (false) when
     * accessing value {@link Value}
     */
    class Guarded extends wrapper_1.default {
        /**
         * @param subject
         * @param errorFactory
         */
        constructor(subject, errorFactory = type_1.default) {
            super(subject);
            this.errorFactory = errorFactory;
        }
        get value() {
            if (!this.valid) {
                throw this.errorFactory(this.subject.value, this.subject);
            }
            return this.subject.value;
        }
    }
    exports.default = Guarded;
});
//# sourceMappingURL=guarded.js.map