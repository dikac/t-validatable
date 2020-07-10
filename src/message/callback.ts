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

import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ReadonlyWrapper from "./readonly-wrapper";
import Validatable from "../validatable";
import ReadonlyMerge from "../value/readonly-merge";
import Validation from "@dikac/t-boolean/validation/validation";
import CallbackValidatable from "../callback";
import ValueCallback from "../value/callback";
import MessageCallback from "@dikac/t-message/callback";
import Memoize from "@dikac/t-message/memoize";
import WrapperMerge from "./wrapper-merge";
import Message from "@dikac/t-message/message";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function Callback<
    Val,
    Msg,
    Return extends boolean = boolean
    >(
    value : Val,
    validation : Function<[Val], Return>,
    messsage : Function<[Readonly<Value<Val>> & Readonly<Validatable<Return>>], Msg>,
) : Readonly<Value<Val>> & Readonly<Validatable<Return>> & Readonly<Message<Msg>> {

    let val = ValueCallback(value, validation);
    let callback = new MessageCallback(messsage, [val]);
    let memoize = new Memoize(callback);

    return new WrapperMerge(
        val, memoize, val
    );

}

