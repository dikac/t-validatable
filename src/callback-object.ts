import Validatable from "./validatable";
import Argument from "@dikac/t-function/argument/argument";
import Function from "@dikac/t-function/function";
import Call from "@dikac/t-boolean/validation/boolean/call";
import Validation from "@dikac/t-boolean/validation/validation";
import Callback from "./callback";

export default function CallbackObject<
    Arg extends any[],
    Return extends boolean
>(
    object : Argument<Arg> & Validation<Arg, Return>
) : Readonly<Validatable<Return>> & Argument<Arg> & Validation<Arg, Return> {

     return new Callback<Arg, Return>(object.argument, object.validation);
}
