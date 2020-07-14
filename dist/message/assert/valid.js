(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-message/throwable/messsage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const messsage_1 = require("@dikac/t-message/throwable/messsage");
    /**
     * Throw exception if given value is not {@link Validatable} type
     */
    function Valid(value, error = messsage_1.default) {
        if (!value.valid) {
            throw error(value);
        }
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map