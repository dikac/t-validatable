(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/value/property", "@dikac/t-value/memoize"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("@dikac/t-object/value/property");
    const memoize_1 = require("@dikac/t-value/memoize");
    /**
     * Wrap {@link Validatable} and cache its value
     *
     * suitable to cached value from heave operation
     */
    class Memoize {
        constructor(subject) {
            this.subject = subject;
            let value = new property_1.default(subject, 'valid');
            this.memoize = new memoize_1.default(value);
        }
        get valid() {
            return this.memoize.value;
        }
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map