(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences", "@dikac/t-object/string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_1 = require("@dikac/t-string/message/sentences");
    const name_1 = require("@dikac/t-object/string/name");
    /**
     * string intended for empty object
     *
     * @param valid
     * @param value
     * @param subject
     */
    function Validatable(valid, value, subject = '') {
        let sentence = new sentences_1.default(valid);
        sentence.subject.push(subject, `"${name_1.default(value)}"`);
        sentence.reject.push('is not compatible with');
        sentence.accept.push('is compatible with');
        sentence.expect.push('Validatable type');
        return sentence.message;
    }
    exports.default = Validatable;
});
//# sourceMappingURL=validatable.js.map