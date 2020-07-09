import Validatable from "./validatable";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function Guard<Assumption extends Validatable = Validatable>(value: unknown, errorFactory?: (value: any) => Error): Assumption;
