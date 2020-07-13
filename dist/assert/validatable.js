(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/validatable", "./throwable/validatable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("../boolean/validatable");
    const validatable_2 = require("./throwable/validatable");
    /**
     * Throw exception if given value is not {@link Validatable} type
     */
    function Validatable(value, errorFactory = validatable_2.default) {
        if (!validatable_1.default(value)) {
            throw errorFactory(value);
        }
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map