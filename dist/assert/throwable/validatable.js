import ValidatableMessage from "../string/validatable";
export default function Validatable(value, subject = '') {
    return new Error(ValidatableMessage(false, value, subject));
}
//# sourceMappingURL=validatable.js.map