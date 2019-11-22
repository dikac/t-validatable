(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "t-object/boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("t-object/boolean/type");
    function Type(value) {
        if (!type_1.default(value)) {
            return false;
        }
        if (typeof value.valid === "boolean") {
            return true;
        }
        return false;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map