import Validatable from "./validatable";
import Compound from "./compound";
/**
 * And operator for {@link Validatable}
 */
export default class And<Arguments extends Iterable<Validatable>> extends Compound<Arguments> {
    get valid(): boolean;
}
