import Validatable from "../validatable";
import TypeObject from "@dikac/t-object/boolean/type";
import TypeBoolean from "@dikac/t-boolean/type";


export default function Type<Assumption extends Validatable = Validatable>(value : any) : value is Assumption  {

    if(!TypeObject<Validatable>(value)) {

        return false;
    }

    if(TypeBoolean(value.valid)) {

        return true;
    }

    return false;
}
