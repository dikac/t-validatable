(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./argument"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const argument_1 = require("./argument");
    /**
     * create string message suitable for function argument, including value
     * @param data
     */
    function ArgumentGiven(data) {
        return argument_1.default(data) + `given '${data.value}'`;
    }
    exports.default = ArgumentGiven;
});
//# sourceMappingURL=argument-given.js.map