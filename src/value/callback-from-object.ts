import Value from "@dikac/t-value/value";
import Validatable from "../validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import Callback from "./callback";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value} to
 * {@param validation}
 */
export default function CallbackFromObject<
    Val,
    Return extends boolean,
>(
    object : Value<Val> & Validation<[Val], Return>,
) : Readonly<Value<Val>> & Readonly<Validatable<Return>> {

    return Callback(object.value, object.validation);
}

