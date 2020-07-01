import Validatable from "./validatable";
import Compound from "./compound";
import FunctionOr from "./boolean/or";

/**
 * Or operator for {@link Validatable}
 */
export default class Or<
    Arguments extends Iterable<Validatable>
> extends Compound<Arguments> {

    get valid() : boolean {

        return  FunctionOr(this.subjects, this.defaults);
    }
}
