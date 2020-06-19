(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./wrapper-merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_merge_1 = require("./wrapper-merge");
    /**
     * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
     * {@param validation}
     */
    function Callback(value, validation) {
        return new wrapper_merge_1.default(value, { valid: validation(value.value) });
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map