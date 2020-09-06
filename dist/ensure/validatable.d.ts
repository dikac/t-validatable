import Validatable from "../validatable";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function Validatable(value: object, errorFactory?: (value: object) => Error): Validatable;
