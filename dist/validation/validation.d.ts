import Validatable from "../validatable";
export default interface Validation<FunctionT extends (...args: unknown[]) => Validatable> {
    validation: FunctionT;
}
