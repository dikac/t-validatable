import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatable from "../validatable";
import ReadonlyMerge from "./readonly-merge";
import CallbackValidatable from "../callback";
import Memoize from "../memoize";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function Callback<
    Val,
    Return extends boolean = boolean,
>(
    value : Val,
    validation : Function<[Val], Return>
) : Readonly<Value<Val>> & Readonly<Validatable<Return>> {

    let callback = new CallbackValidatable([value], validation);
    let memoize = new Memoize(callback);

    return new ReadonlyMerge({value : value}, memoize);
}
