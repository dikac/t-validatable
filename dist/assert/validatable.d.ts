import Validatable from "../validatable";
import Function from "@dikac/t-function/function";
/**
 * Throw exception if given value is not {@link Validatable} type
 */
export default function Validatable<Assumption extends Validatable = Validatable>(value: object, errorFactory?: Function<[object], Error>): asserts value is Assumption;
