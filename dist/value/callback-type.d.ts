import Value from "@dikac/t-value/value";
import Validatable from "../validatable";
declare type Return<Argument, Valid> = (Readonly<Value<Valid>> & Readonly<Validatable<true>>) | (Readonly<Value<Argument>> & Readonly<Validatable<false>>);
/**
 * same as {@link Callback} but with type
 */
export default function CallbackType<Argument, Valid extends Argument>(value: Argument, callback: (value: Argument) => value is Valid): Return<Argument, Valid>;
export {};
