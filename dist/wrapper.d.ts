import Validatable from "./validatable";
import Valid from "./infer/valid";
/**
 * readonly wrapper for {@link Validatable}
 */
export default class Wrapper<Type extends Validatable> implements Readonly<Validatable<Valid<Type>>> {
    subject: Type;
    constructor(subject: Type);
    get valid(): Valid<Type>;
}
