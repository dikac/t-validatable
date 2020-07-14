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
     * {@link Callback} factory by using {@param object}
     *
     * {@link validation} is used as callback
     * {@link Value} is used as value
     * {@link Message} is used as message
     */
    function CallbackObject(object) {
        return callback_1.default(object.value, object.validation, object.message);
    }
    exports.default = CallbackObject;
});
//# sourceMappingURL=callback-object.js.map