import ThrowableType from "./throwable/validatable";
import Validatable from "../validatable";
import Function from "@dikac/t-function/function";
import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/infer/value";
import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/infer/message";

/**
 * Throw exception if given value is not {@link Validatable} type
 */

export default function Valid<
    Assumption extends Argument,
    Argument extends Validatable & Value & Message = Validatable & Value & Message,
>(
    value : Argument,
    error : Function<[InferValue<Argument>, InferMessage<Argument>], Error> = ThrowableType
) : asserts value is Assumption {

    if(!value.valid) {

       throw error(<InferValue<Argument>>value.value, value.message);
    }
}
