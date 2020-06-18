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
     * base for creating compound wrapper for {@template Validatables}
     */
    class Compound {
        /**
         * {@param subjects} multiple {@link Validatable} to be processed by subclass
         *
         * {@param initial} is used if {@param subjects} is empty
         */
        constructor(subjects, initial = true) {
            this.subjects = subjects;
            this.initial = initial;
        }
    }
    exports.default = Compound;
});
//# sourceMappingURL=compound.js.map