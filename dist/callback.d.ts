import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Function from "@dikac/t-function/function";
import Validation from "@dikac/t-boolean/validation/validation";
export default class Callback<Fn extends Function = Function<any[], boolean>> implements Readonly<Validatable<ReturnType<Fn>>>, Argument<Parameters<Fn>>, Validation<Parameters<Fn>> {
    argument: Parameters<Fn>;
    validation: Fn;
    constructor(argument: Parameters<Fn>, validation: Fn);
    get valid(): ReturnType<Fn>;
}
