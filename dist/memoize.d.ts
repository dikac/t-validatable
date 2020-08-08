import Validatable from "./validatable";
import Infer from "./boolean/infer";
import ValueMemoize from "@dikac/t-value/memoize";
import Value from "@dikac/t-value/value";
/**
 * Wrap {@link Validatable} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<Container extends Validatable> implements Readonly<Validatable<Infer<Container>>> {
    subject: Container;
    memoize: ValueMemoize<Readonly<Value<Infer<Container>>>>;
    constructor(subject: Container);
    get valid(): Infer<Container>;
}
