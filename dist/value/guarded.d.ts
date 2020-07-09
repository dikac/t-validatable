import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
import ReadonlyWrapper from "./readonly-wrapper";
/**
 * @inheritDoc {@link Wrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Guarded<Instance extends Validatable & Value = Validatable & Value> extends ReadonlyWrapper<Instance> {
    error: (value: any, subject: Instance) => Error;
    /**
     * @param subject
     * @param error
     */
    constructor(subject: Instance, error?: (value: any, subject: Instance) => Error);
    get value(): ValueInfer<Instance>;
}
