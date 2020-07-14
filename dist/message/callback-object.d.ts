import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatable from "../validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import Message from "@dikac/t-message/message";
/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function CallbackObject<Val, Msg, Return extends boolean = boolean>(object: Value<Val> & Validation<[Val], Return> & Message<Function<[Readonly<Value<Val>> & Readonly<Validatable<Return>>], Msg>>): Readonly<Value<Val>> & Readonly<Validatable<Return>> & Readonly<Message<Msg>>;
