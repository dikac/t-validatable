import ValidatableType from "../boolean/validatable";
import ThrowableType from "./throwable/validatable";
import Validatable from "../validatable";
import Function from "@dikac/t-function/function";

/**
 * Throw exception if given value is not {@link Validatable} type
 */

export default function Validatable<
    Assumption extends Validatable = Validatable
>(
    value : unknown,
    errorFactory : Function<[unknown], Error> = ThrowableType
) : asserts value is Assumption {

    if(!ValidatableType(value)) {

        throw errorFactory(value);
    }
}
