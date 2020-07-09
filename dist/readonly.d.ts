import Validatable from "./validatable";
/**
 * readonly wrapper for {@link Validatable}
 */
export default class Readonly<Type extends boolean> implements globalThis.Readonly<Validatable<Type>> {
    private _valid;
    constructor(_valid: Type);
    get valid(): Type;
}
