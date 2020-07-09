import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatable from "../validatable";
import Message from "@dikac/t-message/message";
/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function Callback<Val, Msg>(value: Val, validation: Function<[Val], boolean>, messsage: Function<[Readonly<Value<Val>> & Readonly<Validatable>], Msg>): Readonly<Value<Val>> & Readonly<Validatable> & Readonly<Message<Msg>>;
