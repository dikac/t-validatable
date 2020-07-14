(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-boolean/validation/boolean/call"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const call_1 = require("@dikac/t-boolean/validation/boolean/call");
    class Callback {
        constructor(argument, validation) {
            this.argument = argument;
            this.validation = validation;
        }
        get valid() {
            return call_1.default(this);
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map