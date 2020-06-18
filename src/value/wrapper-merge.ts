import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
import Validatable from "../validatable";
import Valid from "../infer/valid";

/**
 * merge {@link Value} and {@link Validatable}
 */
export default class WrapperMerge<
    Val extends Value,
    Instance extends Validatable,
> implements
    Readonly<Validatable<Valid<Instance>>>,
    Readonly<Value<ValueInfer<Val>>>
{

    constructor(
        public subjectValue: Val,
        public subjectValidatable: Instance,
    ) {

    }

    get valid(): Valid<Instance> {

        return <Valid<Instance>> this.subjectValidatable.valid;
    }

    get value(): ValueInfer<Val> {

        return <ValueInfer<Val>> this.subjectValue.value;
    }
}
