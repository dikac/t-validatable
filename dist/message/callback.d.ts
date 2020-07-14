import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatable from "../validatable";
import Message from "@dikac/t-message/message";
/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value}
 * to {@param validation}
 *
 * {@param message} is used to generate message
 */
export default function Callback<Val, Msg, Return extends boolean = boolean>(value: Val, validation: Function<[Val], Return>, message: Function<[Readonly<Value<Val> & Validatable<Return>>], Msg>): Readonly<Value<Val> & Validatable<Return> & Message<Msg>>;
