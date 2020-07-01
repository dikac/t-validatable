(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./compound", "./boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const compound_1 = require("./compound");
    const and_1 = require("./boolean/and");
    /**
     * And operator for {@link Validatable}
     */
    class And extends compound_1.default {
        get valid() {
            return and_1.default(this.subjects, this.defaults);
        }
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map