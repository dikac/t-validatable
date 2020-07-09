(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("./callback");
    /**
     * same as {@link Callback} but with type
     */
    function CallbackType(value, callback) {
        return callback_1.default(value, callback);
    }
    exports.default = CallbackType;
});
//# sourceMappingURL=callback-type.js.map