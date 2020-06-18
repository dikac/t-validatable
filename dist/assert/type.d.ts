import Validatable from "../validatable";
/**
 * Throw exception if given value is not {@link Validatable} type
 */
export default function Type<Assumption extends Validatable = Validatable>(value: any, errorFactory?: (value: any) => Error): asserts value is Assumption;
