import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
import Validatable from "../validatable";
import Callback from "./callback";
import Function from "@dikac/t-function/function";
import Message from "@dikac/t-message/message";

type Return<Argument, Valid extends Argument, Msg> =
    (Readonly<Value<Valid>> & Message<Msg> & Readonly<Validatable<true>>) |
    (Readonly<Value<Argument>> & Message<Msg> & Readonly<Validatable<false>>);

/**
 * same as {@link Callback} but with type
 */
export default function CallbackType<
    Argument,
    Valid extends Argument,
    Msg
>(
    value : Argument,
    callback : (value : Argument) => value is Valid,
    messsage : Function<[Return<Argument, Valid, Msg>], Msg>,
) : Return<Argument, Valid, Msg> {

    return <Return<Argument, Valid, Msg>> Callback(value, callback, messsage)
}
