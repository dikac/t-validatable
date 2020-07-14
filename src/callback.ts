import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Function from "@dikac/t-function/function";
import Call from "@dikac/t-boolean/validation/boolean/call";
import Validation from "@dikac/t-boolean/validation/validation";

export default class Callback<
    Arg extends any[],
    Return extends boolean,
> implements Readonly<Validatable<Return>>, Argument<Arg>, Validation<Arg, Return>
{
    constructor(
        readonly argument : Arg,
        readonly validation : Function<Arg, Return>,
    ) {
    }

    get valid () : Return {

        return <Return> Call(this);
    }

}
