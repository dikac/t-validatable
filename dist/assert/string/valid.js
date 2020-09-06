(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name", "@dikac/t-string/message/sentences-is"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    const sentences_is_1 = require("@dikac/t-string/message/sentences-is");
    function Valid(validatable, subject = '', conversion = name_1.default) {
        let sentence = sentences_is_1.default(validatable.valid);
        sentence.subject.push(subject, conversion(validatable));
        sentence.object = ['valid'];
        return sentence.message;
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map