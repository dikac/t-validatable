import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/infer/value";
import ReadonlyWrapperValidatable from "../readonly-wrapper";

/**
 * read only wrapper for {@link Value} and {@link Validatable}
 */
export default class ReadonlyWrapper<
    Subject extends Validatable & Value = Validatable & Value
> extends ReadonlyWrapperValidatable<Subject> implements
    Readonly<Value<InferValue<Subject>>>
{

    get value() : InferValue<Subject> {

        return <InferValue<Subject>> this.subject.value;
    }
}
