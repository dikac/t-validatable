import ThrowableType from "../assert/throwable/validatable";
import AssertType from "../assert/validatable";
import Validatable from "../validatable";

/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */

export default function Validatable<
    Assumption extends Validatable = Validatable
>(
    value : object,
    errorFactory : (value:object)=>Error = ThrowableType
) : Assumption {

    AssertType<Assumption>(value, errorFactory)

    return value;
}


