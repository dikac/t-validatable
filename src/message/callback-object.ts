import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatable from "../validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import Message from "@dikac/t-message/message";
import Callback from "./callback";

/**
 * {@link Callback} factory by using {@param object}
 *
 * {@link validation} is used as callback
 * {@link Value} is used as value
 * {@link Message} is used as message
 */
export default function CallbackObject<
    Val,
    Msg,
    Return extends boolean = boolean
>(
    object : Value<Val> & Validation<[Val], Return> & Message<Function<[Readonly<Value<Val>> & Readonly<Validatable<Return>>], Msg>>,
) : Readonly<Value<Val>> & Readonly<Validatable<Return>> & Readonly<Message<Msg>> {

    return Callback(object.value, object.validation, object.message);

}

