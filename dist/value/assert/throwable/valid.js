(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/valid", "@dikac/t-function/new"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const valid_1 = require("../string/valid");
    const new_1 = require("@dikac/t-function/new");
    function Valid(object, throwable = new_1.default(Error)) {
        return throwable(valid_1.default(object));
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map