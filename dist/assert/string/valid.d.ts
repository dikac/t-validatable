import Validatable from "../../validatable";
export default function Valid<ValidatableType extends Validatable>(validatable: ValidatableType, subject?: string, conversion?: (object: ValidatableType) => string): string;
