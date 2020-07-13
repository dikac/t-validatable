import Validatable from "./validatable";
import Value from "@dikac/t-iterable/infer/value";

/**
 * base for creating compound wrapper for {@template Validatables}
 */
export default abstract class  Compound<Validatables extends Iterable<Validatable>> implements Readonly<Validatable>, Iterable<Value<Validatables>> {

    /**
     * {@param subjects} multiple {@link Validatable} to be processed by subclass
     *
     * {@param defaults} is used if {@param subjects} is empty
     */
    constructor(
        public subjects : Validatables,
        public defaults : boolean = true
    ) {

    }

    [Symbol.iterator]() : Iterator<Value<Validatables>> {

        return <Iterator<Value<Validatables>>> this.subjects[Symbol.iterator]();
    }

    abstract readonly valid: boolean;
}
