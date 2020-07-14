import Validatable from "../../../validatable";
import Value from "@dikac/t-value/value";
import Name from "@dikac/t-object/string/name";

export default function Valid(object : Validatable & Value) : string {

    let name = Name(object);

    if(object.valid) {

        return `Validatable "${name}" is valid`;

    } else {

        return `Validatable "${name}" is not valid`;
    }
}
