import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Function from "@dikac/t-function/function";
import Call from "@dikac/t-boolean/validation/boolean/call";
import Validation from "@dikac/t-boolean/validation/validation";

export default class Callback<
    Fn extends Function = Function<any[], boolean>,
> implements Readonly<Validatable<ReturnType<Fn>>>, Argument<Parameters<Fn>>, Validation<Parameters<Fn>>
{
    constructor(
        public argument : Parameters<Fn>,
        public validation : Fn,
    ) {
    }

    get valid () : ReturnType<Fn> {

        return <ReturnType<Fn>> Call(this);
    }

    // get argument() : Parameters<Fn> {
    //
    //     return this.subject.argument;
    //
    // }

}
