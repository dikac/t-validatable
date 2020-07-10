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
import Callback from "./callback";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
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

