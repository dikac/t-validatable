(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name", "@dikac/t-string/message/sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    const sentence_1 = require("@dikac/t-string/message/sentence");
    function Valid(validatable, conversion = name_1.default) {
        let sentence = new sentence_1.default(validatable.valid);
        sentence.subject = conversion(validatable);
        sentence.reject = 'is not';
        sentence.expect = 'valid';
        return sentence.message;
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map