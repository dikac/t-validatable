(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./readonly-merge", "../callback", "../memoize"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("./readonly-merge");
    const callback_1 = require("../callback");
    const memoize_1 = require("../memoize");
    /**
     * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
     * {@param validation}
     */
    function Callback(value, validation) {
        let callback = new callback_1.default([value], validation);
        let memoize = new memoize_1.default(callback);
        return new readonly_merge_1.default({ value: value }, memoize);
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map