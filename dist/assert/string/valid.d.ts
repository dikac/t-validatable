import Validatable from "../../validatable";
export default function Valid<ValidatableType extends Validatable>(validatable: ValidatableType, conversion?: (object: ValidatableType) => string): string;
