import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
import WrapperMerge from "./wrapper-merge";
import Validatable from "../validatable";
import Callback from "./callback";


/**
 * same as {@link Callback} but with type
 */
export default function CallbackType<
    ValidType,
    Val extends Value = Value
>(
    value : Val,
    callback : (value : any) => value is ValidType
) : WrapperMerge<Value<ValueInfer<Val>>, Validatable<false>> | WrapperMerge<Value<ValidType>, Validatable<true>> {

    return <WrapperMerge<Value<ValueInfer<Val>>, Validatable<false>> | WrapperMerge<Value<ValidType>, Validatable<true>>> Callback(value, callback)
}
