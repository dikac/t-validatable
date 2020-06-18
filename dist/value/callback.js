(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./wrapper-merge", "../standard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_merge_1 = require("./wrapper-merge");
    const standard_1 = require("../standard");
    /**
     * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
     * {@param validation}
     */
    function Callback(value, validation) {
        return new wrapper_merge_1.default(value, standard_1.default(validation(value.value)));
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map