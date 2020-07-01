import Validatable from "../validatable";

export default function Or<
    Validatables extends Iterable<Validatable>
>(
    validatables : Validatables,
    defaults : boolean = true
) : boolean {

    for(let validatable of validatables) {

        defaults = validatable.valid;

        if(defaults) {

            return true;
        }
    }

    return defaults;
}
