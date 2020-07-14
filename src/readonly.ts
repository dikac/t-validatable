import Validatable from "./validatable";


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


