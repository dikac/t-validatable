import Validatable from "./validatable";
import Compound from "./compound";

/**
 * Or operator for {@link Validatable}
 */
export default class Or<
    Arguments extends Iterable<Validatable>
> extends Compound<Arguments> {

    get valid() : boolean {

        let valid = this.initial;

        for(let validatable of this.subjects) {

            valid = validatable.valid;

            if(valid) {

                return true;
            }
        }

        return valid;
    }
}
