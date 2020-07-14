import Validatable from "./validatable";
import Compound from "./compound";
/**
 * Or operator for {@link Validatable}
 */
export default class Or<Arguments extends Iterable<Validatable>> extends Compound<Arguments> {
    get valid(): boolean;
}
