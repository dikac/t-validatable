import Validatable from "../validatable";

export default function Boolean<Bool extends boolean>(validatable : Validatable<Bool>) : Bool {

    return <Bool> validatable.valid;
}
