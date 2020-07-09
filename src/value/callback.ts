import Value from "@dikac/t-value/value";
import ReadonlyWrapper from "./readonly-wrapper";
import Validatable from "../validatable";
import ReadonlyMerge from "./readonly-merge";
import Validation from "@dikac/t-boolean/validation/validation";
import Callback from "../callback";
import Memoize from "../memoize";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function Callbackz<
    Val
>(
    value : Val,
    validation : Function<[Val], boolean>
) : ReadonlyWrapper<Val, boolean> {

    let object = {
        value : value,
        validation : validation,
        argument : [value]
    }

    let callback = new Callback(object);
    let memoize = new Memoize(callback);

    // return new ReadonlyWrapper(
    //     object.value,
    //     object.validation(object.value)
    // );
}
