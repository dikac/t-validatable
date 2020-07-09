import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
import ThrowableType from "../throwable/type";
import ReadonlyWrapper from "./readonly-wrapper";

/**
 * @inheritDoc {@link Wrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Guarded<
    Instance extends Validatable & Value = Validatable & Value
> extends ReadonlyWrapper<
    Instance
> {

    /**
     * @param subject
     * @param errorFactory
     */
    constructor(
        subject : Instance,
        public errorFactory : (value: any, subject : Instance) => Error = ThrowableType
    ) {

        super(subject);
    }

    get value() : ValueInfer<Instance> {

        if(!this.valid) {

            throw this.errorFactory(this.subject.value, this.subject);
        }

        return <ValueInfer<Instance>> this.subject.value;
    }
}
