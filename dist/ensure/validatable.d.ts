import Validatable from "../validatable";
import Function from "@dikac/t-function/function";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function Validatable<Assumption extends Validatable = Validatable>(value: unknown, errorFactory?: Function<[any], Error>): Assumption;
