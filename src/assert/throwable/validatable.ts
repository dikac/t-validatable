import ValidatableMessage from "../string/validatable";

export default function Validatable(
    value : object,
    subject : string = ''
) : Error {

    return new Error(ValidatableMessage(false, value, subject));
}
