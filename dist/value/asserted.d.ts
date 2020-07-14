import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
import ReadonlyWrapper from "./readonly-wrapper";
import Function from "@dikac/t-function/function";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<Instance extends Validatable & Value = Validatable & Value> extends ReadonlyWrapper<Instance> {
    error: Function<[Instance], Error>;
    /**
     * @param subject
     * @param error
     */
    constructor(subject: Instance, error?: Function<[Instance], Error>);
    get value(): ValueInfer<Instance>;
}
