import Validatable from "../validatable";

export default function And<
    Validatables extends Iterable<Validatable>
>(
    validatables : Validatables,
    defaults : boolean = true
) : boolean {

    for(let validatable of validatables) {

        defaults = validatable.valid;

        if(!defaults) {

            return false;
        }
    }

    return defaults;
}
