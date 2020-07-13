import Value from "@dikac/t-value/value";
import Validatable from "../validatable";
import Function from "@dikac/t-function/function";
import Message from "@dikac/t-message/message";
import Guard from "@dikac/t-function/boolean/guard";
declare type Return<Argument, Valid extends Argument, Msg> = (Readonly<Value<Valid>> & Message<Msg> & Readonly<Validatable<true>>) | (Readonly<Value<Argument>> & Message<Msg> & Readonly<Validatable<false>>);
/**
 * same as {@link Callback} but with type
 */
export default function CallbackType<Argument, Valid extends Argument, Msg>(value: Argument, callback: Guard<Argument, Valid>, messsage: Function<[Return<Argument, Valid, Msg>], Msg>): Return<Argument, Valid, Msg>;
export {};
