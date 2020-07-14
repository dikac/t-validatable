import Value from "@dikac/t-value/value";
import Validatable from "../validatable";
import Validation from "@dikac/t-boolean/validation/validation";
/**
 * {@link Callback} factory by using {@param object}
 *
 * {@link validation} is used as callback
 * {@link Value} is used as value
 */
export default function CallbackFromObject<Val, Return extends boolean>(object: Value<Val> & Validation<[Val], Return>): Readonly<Value<Val>> & Readonly<Validatable<Return>>;
