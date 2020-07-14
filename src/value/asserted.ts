import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
import ReadonlyWrapper from "./readonly-wrapper";
import Function from "@dikac/t-function/function";
import ThrowableValid from "./assert/throwable/valid";

/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<
    Instance extends Validatable & Value = Validatable & Value
> extends ReadonlyWrapper<
    Instance
> {

    /**
     * @param subject
     * @param error
     */
    constructor(
        subject : Instance,
        public error : Function<[Instance], Error> = ThrowableValid
    ) {

        super(subject);
    }

    get value() : ValueInfer<Instance> {

        if(!this.valid) {

            throw this.error(this.subject);
        }

        return <ValueInfer<Instance>> this.subject.value;
    }
}
