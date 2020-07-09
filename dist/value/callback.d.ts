import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatable from "../validatable";
/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function Callback<Val>(value: Val, validation: Function<[Val], boolean>): Readonly<Value<Val>> & Readonly<Validatable>;
