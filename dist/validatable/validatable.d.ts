import ValidatableInterface from "../validatable";
export default interface Validatable<ValidatableT extends ValidatableInterface> {
    validatable: ValidatableT;
}
