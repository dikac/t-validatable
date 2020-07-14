import Validatable from "../../validatable";
import Function from "@dikac/t-function/function";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import ThrowableMessage from "@dikac/t-message/throwable/messsage";

/**
 * Throw exception if given value is not {@link Validatable} type
 */

export default function Valid<
    Assumption extends Argument,
    Argument extends Validatable & Value & Message = Validatable & Value & Message,
>(
    value : Argument,
    error : Function<[Argument], Error> = ThrowableMessage
) : asserts value is Assumption {

    if(!value.valid) {

       throw error(value);
    }
}
