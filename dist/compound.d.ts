import Validatable from "./validatable";
/**
 * base for creating compound wrapper for {@template Validatables}
 */
export default abstract class Compound<Validatables extends Iterable<Validatable>> implements Readonly<Validatable> {
    subjects: Validatables;
    initial: boolean;
    /**
     * {@param subjects} multiple {@link Validatable} to be processed by subclass
     *
     * {@param initial} is used if {@param subjects} is empty
     */
    constructor(subjects: Validatables, initial?: boolean);
    abstract readonly valid: boolean;
}
