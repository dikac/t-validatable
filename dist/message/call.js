(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_1 = require("../wrapper");
    class Call extends wrapper_1.default {
        constructor(validatable, messageFactory) {
            super(validatable);
            this.messageFactory = messageFactory;
        }
        get message() {
            return this.messageFactory();
        }
    }
    exports.default = Call;
});
//# sourceMappingURL=call.js.map