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
    function And(validatables, defaults = true) {
        for (let validatable of validatables) {
            defaults = validatable.valid;
            if (!defaults) {
                return false;
            }
        }
        return defaults;
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map