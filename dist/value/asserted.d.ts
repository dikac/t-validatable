import Validatable from "../validatable";
import ValueInterface from "@dikac/t-value/value";
import Wrapper from "../wrapper";
export default class Value<Val, Valid extends Validatable> extends Wrapper<Valid> implements Readonly<ValueInterface<Val>> {
    private _value;
    private _exceptionFactory;
    constructor(validatable: Valid, _value: Val, _exceptionFactory?: (message: string) => Error);
    get value(): Val;
}
