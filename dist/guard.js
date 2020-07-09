(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./throwable/type", "./assert/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("./throwable/type");
    const type_2 = require("./assert/type");
    /**
     * Throw exception if given value is no {@link Validatable} type
     *
     */
    function Guard(value, errorFactory = type_1.default) {
        type_2.default(value, errorFactory);
        return value;
    }
    exports.default = Guard;
});
//# sourceMappingURL=guard.js.map