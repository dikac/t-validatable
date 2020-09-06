import Validatable from "../validatable";
/**
 * Throw exception if given value is not {@link Validatable} type
 */
export default function Validatable(value: object, errorFactory?: (value: object) => Error): asserts value is Validatable;
