(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../value/wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_1 = require("../value/wrapper");
    class Wrapper extends wrapper_1.default {
        get message() {
            return this.subject.message;
        }
    }
    exports.default = Wrapper;
});
//# sourceMappingURL=wrapper.js.map