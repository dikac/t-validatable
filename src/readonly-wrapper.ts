import Validatable from "./validatable";
import Boolean from "./boolean/boolean";


/**
 * readonly wrapper for {@link Validatable}
 */

export default class ReadonlyWrapper<
    Type extends Validatable
> implements Readonly<
    Validatable<Boolean<Type>>
>{
    constructor(
        protected subject : Type
    ) {

    }

    get valid() : Boolean<Type> {

        return <Boolean<Type>> this.subject.valid;
    }
}


