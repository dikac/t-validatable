import Validatable from "../validatable";
import TypeObject from "@dikac/t-object/boolean/type";


export default function Type (value : any) : value is Validatable  {

    if(!TypeObject<Validatable>(value)) {

        return false;
    }

    if(typeof value.valid === "boolean") {

        return true;
    }

    return false;
}