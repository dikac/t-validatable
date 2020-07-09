import Validatable from "../validatable";
import ValidInfer from "../infer/valid";
import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
/**
 * readonly wrapper for {@link Validatable}
 */
export default class ReadonlyMerge<ValueType extends Value, ValidatableType extends Validatable> implements Readonly<Validatable<ValidInfer<ValidatableType>>>, Readonly<Value<ValueInfer<ValueType>>> {
    subjectValue: ValueType;
    subjectValidatable: ValidatableType;
    constructor(subjectValue: ValueType, subjectValidatable: ValidatableType);
    get valid(): ValidInfer<ValidatableType>;
    get value(): ValueInfer<ValueType>;
}
