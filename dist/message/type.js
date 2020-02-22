(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../type/wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const wrapper_1 = require("../type/wrapper");
    class Type extends wrapper_1.default {
        constructor(validatable, messageFactory) {
            super(validatable);
            this.messageFactory = messageFactory;
        }
        get message() {
            return this.messageFactory(this.validatable.type);
        }
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map