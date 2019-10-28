import Validatable from "../validatable";
import NotNull from "t-object/not-null";


export default function Is (value : any) : value is Validatable  {

    if(!NotNull<Validatable>(value)) {

        return false;
    }

    if(typeof value.valid === "boolean") {

        return true;
    }

    return false;
}