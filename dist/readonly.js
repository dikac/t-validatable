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
    class Readonly {
        constructor(_valid) {
            this._valid = _valid;
        }
        get valid() {
            return this._valid;
        }
    }
    exports.default = Readonly;
});
//# sourceMappingURL=readonly.js.map