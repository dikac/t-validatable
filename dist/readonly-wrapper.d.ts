import Validatable from "./validatable";
import Boolean from "./boolean/boolean";
/**
 * readonly wrapper for {@link Validatable}
 */
export default class ReadonlyWrapper<Type extends Validatable> implements Readonly<Validatable<Boolean<Type>>> {
    protected subject: Type;
    constructor(subject: Type);
    get valid(): Boolean<Type>;
}
