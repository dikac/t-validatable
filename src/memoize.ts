import Validatable from "./validatable";
import Infer from "./boolean/infer";
import ObjectProperty from "@dikac/t-object/value/property";
import ValueMemoize from "@dikac/t-value/memoize";

/**
 * Wrap {@link Validatable} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
    Container extends Validatable
    > implements
    Readonly<Validatable<Infer<Container>>>
{
    public memoize : ValueMemoize<ObjectProperty<'valid', Container>>;

    constructor(
        public subject : Container
    ) {

        let value = new ObjectProperty(subject, 'valid');
        this.memoize = new ValueMemoize(value);
    }


    get valid () : Infer<Container> {

        return <Infer<Container>>this.memoize.value;
    }

}

