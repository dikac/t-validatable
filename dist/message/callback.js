// import Message from "@dikac/t-message/message";
// import Validatable from "../validatable";
// import Value from "@dikac/t-value/value";
// import ValueInfer from "@dikac/t-value/infer/value";
// import Wrapper from "../value/wrapper";
//
// export default class Callback<
//     Msg,
//     Subject extends Validatable & Value = Validatable & Value
// > extends Wrapper<Subject> implements Readonly<Message<Msg>> {
//
//     constructor(
//         subject : Subject,
//         public callback : (value : Subject) => Msg,
//     ) {
//         super(subject);
//     }
//
//     get message () : Msg {
//
//         return this.callback(this.subject);
//     }
// }
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../value/callback", "@dikac/t-message/callback", "@dikac/t-message/memoize", "./wrapper-merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("../value/callback");
    const callback_2 = require("@dikac/t-message/callback");
    const memoize_1 = require("@dikac/t-message/memoize");
    const wrapper_merge_1 = require("./wrapper-merge");
    /**
     * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
     * {@param validation}
     */
    function Callback(value, validation, messsage) {
        let val = callback_1.default(value, validation);
        let callback = new callback_2.default(messsage, [val]);
        let memoize = new memoize_1.default(callback);
        return new wrapper_merge_1.default(val, memoize, val);
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map