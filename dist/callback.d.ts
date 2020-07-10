import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Function from "@dikac/t-function/function";
import Validation from "@dikac/t-boolean/validation/validation";
export default class Callback<Arg extends any[], Return extends boolean> implements Readonly<Validatable<Return>>, Argument<Arg>, Validation<Arg, Return> {
    readonly argument: Arg;
    readonly validation: Function<Arg, Return>;
    constructor(argument: Arg, validation: Function<Arg, Return>);
    get valid(): Return;
}
