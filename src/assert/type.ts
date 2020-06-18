import ValidatableType from "../boolean/type";
import ThrowableType from "../throwable/type";
import Validatable from "../validatable";

/**
 * Throw exception if given value is not {@link Validatable} type
 */

export default function Type<
    Assumption extends Validatable = Validatable
>(
    value : any,
    errorFactory : (value: any) => Error = ThrowableType
) : asserts value is Assumption {

    if(!ValidatableType(value)) {

        throw errorFactory(value);
    }
}
