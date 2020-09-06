import ValidatableInterface from "../validatable";
import Validatable from "../validatable";
import MessageValid from "./string/valid";
import ThrowableValid from "./throwable/valid";
import BooleanValid from "../boolean/valid";
import Callback from "@dikac/t-function/assert/callback";

/**
 * Throw exception if given value is not {@link ValidatableInterface} type
 */

export default function Valid<
    Assumption extends Argument,
    Argument extends Validatable = Validatable,
>(
    value : Argument,
    error : (value:Argument)=>Error = ThrowableValid
) : asserts value is Assumption {

    Callback(value, BooleanValid, error);
}
