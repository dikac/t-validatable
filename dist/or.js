(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./compound", "./boolean/or"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const compound_1 = require("./compound");
    const or_1 = require("./boolean/or");
    /**
     * Or operator for {@link Validatable}
     */
    class Or extends compound_1.default {
        get valid() {
            return or_1.default(this.subjects, this.defaults);
        }
    }
    exports.default = Or;
});
//# sourceMappingURL=or.js.map