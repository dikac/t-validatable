import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Validation from "@dikac/t-boolean/validation/validation";
export default class Callback<Arguments extends any[], Return extends boolean> implements Readonly<Validatable<Return>>, Argument<Arguments>, Validation<Arguments, Return> {
    readonly argument: Arguments;
    readonly validation: (...args: Arguments) => Return;
    constructor(argument: Arguments, validation: (...args: Arguments) => Return);
    get valid(): Return;
}
