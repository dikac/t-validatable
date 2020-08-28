import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Call from "@dikac/t-boolean/validation/boolean/call";
import Validation from "@dikac/t-boolean/validation/validation";

export default class Callback<
    Arguments extends any[],
    Return extends boolean,
> implements Readonly<Validatable<Return>>, Argument<Arguments>, Validation<Arguments, Return>
{
    constructor(
        readonly argument : Arguments,
        readonly validation : (...args:Arguments)=>Return,
    ) {
    }

    get valid () : Return {

        return <Return> Call(this);
    }

}
