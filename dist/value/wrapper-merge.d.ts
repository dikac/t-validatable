import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
import Validatable from "../validatable";
import Valid from "../infer/valid";
/**
 * merge {@link Value} and {@link Validatable}
 */
export default class WrapperMerge<Val extends Value, Instance extends Validatable> implements Readonly<Validatable<Valid<Instance>>>, Readonly<Value<ValueInfer<Val>>> {
    subjectValue: Val;
    subjectValidatable: Instance;
    constructor(subjectValue: Val, subjectValidatable: Instance);
    get valid(): Valid<Instance>;
    get value(): ValueInfer<Val>;
}
