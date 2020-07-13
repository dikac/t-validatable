import Validatable from "../validatable";
import TypeObject from "@dikac/t-object/boolean/object";
import TypeBoolean from "@dikac/t-boolean/boolean";

/**
 * check if {@param value} is compatible to {@link Validatable} type
 */
export default function Validatable<
    Assumption extends Validatable = Validatable
>(
    value : any
) : value is Assumption  {

    if(!TypeObject<Validatable>(value)) {

        return false;
    }

    if(TypeBoolean(value.valid)) {

        return true;
    }

    return false;
}


