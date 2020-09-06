import ValidType from "../string/valid";
import Validatable from "../../validatable";

export default function Valid<
    Argument extends Validatable = Validatable
>(
    string : Argument,
    subject : string = '',
    conversion : (value:Argument)=>string = value=>typeof value
) : Error {

    return new Error(ValidType(string, subject, conversion))
}
