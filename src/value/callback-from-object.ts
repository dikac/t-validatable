import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ReadonlyWrapper from "./readonly-wrapper";
import Validatable from "../validatable";
import ReadonlyMerge from "./readonly-merge";
import Validation from "@dikac/t-boolean/validation/validation";
import CallbackValidatable from "../callback";
import Memoize from "../memoize";
import Callback from "./callback";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function CallbackFromObject<
    Val,
    Return extends boolean,
>(
    object : Value<Val> & Validation<[Val], Return>,
) : Readonly<Value<Val>> & Readonly<Validatable<Return>> {

    return Callback(object.value, object.validation);
}

