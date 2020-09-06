import Validatable from "./validatable";
import Infer from "./boolean/infer";
import ValueMemoize from "@dikac/t-value/memoize";
import Value from "@dikac/t-value/value";

/**
 * @deprecated
 * Wrap {@link Validatable} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize<
    Container extends Validatable
> implements
    Readonly<Validatable<Infer<Container>>>
{
    public memoize : ValueMemoize<Readonly<Value<Infer<Container>>>>;

    constructor(
        public subject : Container
    ) {

        this.memoize = new ValueMemoize(<Readonly<Value<Infer<Container>>>>{
            get value () {
                return subject.valid;
            },
        });
    }


    get valid () : Infer<Container> {

        return <Infer<Container>>this.memoize.value;
    }

}

