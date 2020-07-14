import ValidatableMessage from "../../boolean/string/validatable";

export default function Validatable(value : unknown) : Error {

    return new Error(ValidatableMessage(value, false))
}
