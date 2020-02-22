(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("./value");
    function ValueActual(data) {
        return value_1.default(data) + `, actual '${data.value}'`;
    }
    exports.default = ValueActual;
});
//# sourceMappingURL=value-actual.js.map