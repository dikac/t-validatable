import Validatable from "../validatable";
import TypeBoolean from "@dikac/t-boolean/boolean";

/**
 * check if {@param value} is compatible to {@link Validatable} type
 */
export default function Validatable<
    Assumption extends Validatable = Validatable
>(
    value : object
) : value is Assumption  {


    if(TypeBoolean((value as Validatable).valid)) {

        return true;
    }

    return false;
}


