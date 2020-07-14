(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    function Valid(object) {
        let name = name_1.default(object);
        if (object.valid) {
            return `Validatable "${name}" is valid`;
        }
        else {
            return `Validatable "${name}" is not valid`;
        }
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map