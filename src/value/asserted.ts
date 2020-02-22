import Validatable from "../validatable";
import ValueInterface from "@dikac/t-value/value";
import Wrapper from "../wrapper";

export default class Asserted<Val, Valid extends Validatable> extends Wrapper<Valid>  implements Readonly<ValueInterface<Val>>{

    constructor(
        validatable : Valid,
        private _value : Val,
        private _exceptionFactory : (message : string) => Error = (message : string) => new Error(message)

    ) {
        super(validatable);
    }


    get value() : Val {

        if(!this.validatable.valid) {

            throw new Error();
        }

        return this._value;
    }
}
