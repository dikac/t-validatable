import Validatable from "./validatable";
import Valid from "./infer/valid";
/**
 * readonly wrapper for {@link Validatable}
 */
export default class ReadonlyWrapper<Type extends Validatable> implements Readonly<Validatable<Valid<Type>>> {
    protected subject: Type;
    constructor(subject: Type);
    get valid(): Valid<Type>;
}
