import Validatable from "./validatable";
import Valid from "./infer/valid";


/**
 * readonly wrapper for {@link Validatable}
 */

export default class ReadonlyWrapper<
    Type extends Validatable
> implements Readonly<
    Validatable<Valid<Type>>
>{
    constructor(
        public subject : Type
    ) {

    }

    get valid() : Valid<Type> {

        return <Valid<Type>> this.subject.valid;
    }
}


