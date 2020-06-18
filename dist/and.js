(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./compound"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const compound_1 = require("./compound");
    /**
     * And operator for {@link Validatable}
     */
    class And extends compound_1.default {
        get valid() {
            let valid = this.initial;
            for (let validatable of this.subjects) {
                valid = validatable.valid;
                if (!valid) {
                    return false;
                }
            }
            return valid;
        }
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map