import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ReadonlyWrapper from "./readonly-wrapper";
import Validatable from "../validatable";
import ReadonlyMerge from "./readonly-merge";
import Validation from "@dikac/t-boolean/validation/validation";
import CallbackValidatable from "../callback";
import Memoize from "../memoize";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function Callback<
    Val
>(
    value : Val,
    validation : Function<[Val], boolean>
) : Readonly<Value<Val>> & Readonly<Validatable> {

    let callback = new CallbackValidatable([value], validation);
    let memoize = new Memoize(callback);

    return new ReadonlyMerge({value : value}, memoize)
}
