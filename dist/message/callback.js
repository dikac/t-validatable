(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../value/callback", "@dikac/t-message/callback", "@dikac/t-message/memoize", "./wrapper-merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("../value/callback");
    const callback_2 = require("@dikac/t-message/callback");
    const memoize_1 = require("@dikac/t-message/memoize");
    const wrapper_merge_1 = require("./wrapper-merge");
    /**
     * use {@param validation} to populate {@link Validatable} data by passing {@param value}
     * to {@param validation}
     *
     * {@param message} is used to generate message
     */
    function Callback(value, validation, message) {
        let val = callback_1.default(value, validation);
        let callback = new callback_2.default(message, [val]);
        let memoize = new memoize_1.default(callback);
        return new wrapper_merge_1.default(val, memoize, val);
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map