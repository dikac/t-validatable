import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatable from "../validatable";
import ValueCallback from "../value/callback";
import MessageCallback from "@dikac/t-message/callback";
import Memoize from "@dikac/t-message/memoize";
import WrapperMerge from "./wrapper-merge";
import Message from "@dikac/t-message/message";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value}
 * to {@param validation}
 *
 * {@param message} is used to generate message
 */
export default function Callback<
    Val,
    Msg,
    Return extends boolean = boolean
    >(
    value : Val,
    validation : Function<[Val], Return>,
    message : Function<[Readonly<Value<Val>> & Readonly<Validatable<Return>>], Msg>,
) : Readonly<Value<Val>> & Readonly<Validatable<Return>> & Readonly<Message<Msg>> {

    let val = ValueCallback(value, validation);
    let callback = new MessageCallback(message, [val]);
    let memoize = new Memoize(callback);

    return new WrapperMerge(
        val, memoize, val
    );

}

