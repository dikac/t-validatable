import Value from "@dikac/t-value/value";
import ValidatableReadonly from "../readonly";
/**
 * read only wrapper for {@link Value} and {@link Validatable}
 */
export default class Readonly<Val, Valid extends boolean> extends ValidatableReadonly<Valid> implements globalThis.Readonly<Value<Val>> {
    private _value;
    constructor(_value: Val, valid: Valid);
    get value(): Val;
}
