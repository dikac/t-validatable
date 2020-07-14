import Validatable from "../validatable";
import Valid from "../infer/valid";

export default function Boolean<Bool extends boolean>(validatable : Validatable<Bool>) : Bool {

    return <Bool> validatable.valid;
}
