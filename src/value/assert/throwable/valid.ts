import ValidMessage from "../string/valid";
import Validatable from "../../../validatable";
import Value from "@dikac/t-value/value";
import New from "@dikac/t-function/new";
import Function from "@dikac/t-function/function";

export default function Valid(
    object : Validatable & Value,
    throwable : Function<[string], Error> = New(Error)
) : Error {

    return throwable(ValidMessage(object))
}
