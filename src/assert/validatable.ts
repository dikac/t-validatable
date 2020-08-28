import ValidatableType from "../boolean/validatable";
import ThrowableType from "./throwable/validatable";
import Validatable from "../validatable";

/**
 * Throw exception if given value is not {@link Validatable} type
 */

export default function Validatable<
    Assumption extends Validatable = Validatable
>(
    value : object,
    errorFactory : (value:object)=>Error = ThrowableType
) : asserts value is Assumption {

    if(!ValidatableType(value)) {

        throw errorFactory(value);
    }
}
