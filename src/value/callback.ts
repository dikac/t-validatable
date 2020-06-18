import Value from "@dikac/t-value/value";
import WrapperMerge from "./wrapper-merge";
import Standard from "../standard";
import Validatable from "../validatable";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function Callback<
    Val extends Value
>(
    value : Val,
    validation : (value : any) => boolean
) : WrapperMerge<Val, Validatable> {

    return new WrapperMerge(
        value,
        Standard(validation(value.value))
    );
}
