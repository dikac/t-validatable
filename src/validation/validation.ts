import Function from "@dikac/t-function/function";
import Validatable from "../validatable";
export default interface Validation<FunctionT extends Function<unknown[], Validatable>> {
    validation : FunctionT
}
