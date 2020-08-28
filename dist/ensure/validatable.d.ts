import Validatable from "../validatable";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function Validatable<Assumption extends Validatable = Validatable>(value: object, errorFactory?: (value: object) => Error): Assumption;
