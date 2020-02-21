import Validatable from "./validatable";
export default class Wrapper<V extends Validatable> implements Readonly<Validatable> {
    validatable: V;
    constructor(validatable: V);
    get valid(): boolean;
}
