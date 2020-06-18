import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/infer/value";
import Valid from "../infer/valid";
/**
 * read only wrapper for {@link Value} and {@link Validatable}
 */
export default class Wrapper<Subject extends Validatable & Value = Validatable & Value> implements Readonly<Validatable<Valid<Subject>>>, Readonly<Value<InferValue<Subject>>> {
    protected subject: Subject;
    constructor(subject: Subject);
    get valid(): Valid<Subject>;
    get value(): InferValue<Subject>;
}
