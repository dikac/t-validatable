import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import ValidatableReadonly from "../readonly";
/**
 * read only wrapper for {@link Value} and {@link Validatable}
 */
export default class Readonly<
    Val,
    Valid extends boolean
> extends ValidatableReadonly<Valid> implements
    globalThis.Readonly<Value<Val>>
{

    constructor(
        private _value : Val,
        valid : Valid,
    ) {
        super(valid);
    }

    get value() : Val {

        return this._value;
    }

}
