(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/type", "../throwable/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../boolean/type");
    const type_2 = require("../throwable/type");
    /**
     * Throw exception if given value is not {@link Validatable} type
     */
    function Type(value, errorFactory = type_2.default) {
        if (!type_1.default(value)) {
            throw errorFactory(value);
        }
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map