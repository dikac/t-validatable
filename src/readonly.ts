import Validatable from "./validatable";
import Valid from "./infer/valid";


/**
 * readonly wrapper for {@link Validatable}
 */

export default class Readonly<
    Type extends boolean
> implements globalThis.Readonly<
    Validatable<Type>
>{

    constructor(
        private _valid : Type
    ) {

    }

    get valid() : Type {

        return this._valid;
    }
}


