import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Function from "@dikac/t-function/function";
import Call from "@dikac/t-boolean/validation/boolean/call";
import Validation from "@dikac/t-boolean/validation/validation";

export default class Callback<
    Fn extends Function = Function<any[], boolean>,
> implements Readonly<Validatable<ReturnType<Fn>>>/*, Argument<Parameters<Fn>>*/
{
    constructor(
        public subject : Validation<Parameters<Fn>> & Argument<Parameters<Fn>>,
    ) {
    }

    get valid () : ReturnType<Fn> {

        return <ReturnType<Fn>> Call(this.subject);
    }

    // get argument() : Parameters<Fn> {
    //
    //     return this.subject.argument;
    //
    // }

}
