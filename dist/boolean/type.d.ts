import Validatable from "../validatable";
/**
 * return true if {@param value} is {@link Validatable} type, false otherwise
 */
export default function Type<Assumption extends Validatable = Validatable>(value: any): value is Assumption;
