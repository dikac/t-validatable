import Validatable from "../validatable";
import TypeBoolean from "@dikac/t-boolean/boolean";

/**
 * check if {@param value} is compatible to {@link Validatable} type
 */
export default function Validatable(
    value : object
) : value is Validatable  {


    if(TypeBoolean((value as Validatable).valid)) {

        return true;
    }

    return false;
}


