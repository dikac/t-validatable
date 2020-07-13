import Validatable from "../validatable";
/**
 * check if {@param value} is compatible to {@link Validatable} type
 */
export default function Validatable<Assumption extends Validatable = Validatable>(value: any): value is Assumption;
