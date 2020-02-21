import Validatable from "./validatable";

export default class Wrapper<V extends Validatable> implements Readonly<Validatable>{

    constructor(
        public validatable : V
    ) {

    }

    get valid() : boolean {

        return this.validatable.valid;
    }
}
