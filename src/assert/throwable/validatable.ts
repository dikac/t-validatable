import ValidatableMessage from "../string/validatable";

export default function Validatable(number : unknown) : Error {

    return new Error(ValidatableMessage(number, false))
}
