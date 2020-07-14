import Validatable from "../validatable";
import Function from "@dikac/t-function/function";
/**
 * Throw exception if given value is not {@link Validatable} type
 */
export default function Validatable<Assumption extends Validatable = Validatable>(value: any, errorFactory?: Function<[any], Error>): asserts value is Assumption;
