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
    class Callback extends wrapper_1.default {
        constructor(subject, callback) {
            super(subject);
            this.callback = callback;
        }
        get message() {
            return this.callback(this.subject.value, this.subject.valid);
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map