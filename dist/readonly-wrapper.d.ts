import Validatable from "./validatable";
import Infer from "./boolean/infer";
/**
 * readonly wrapper for {@link Validatable}
 */
export default class ReadonlyWrapper<Type extends Validatable> implements Readonly<Validatable<Infer<Type>>> {
    protected subject: Type;
    constructor(subject: Type);
    get valid(): Infer<Type>;
}
