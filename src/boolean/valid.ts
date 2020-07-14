import Validatable from "../validatable";

export default function Invalid<Assumption extends Validatable>(validatable : Assumption) : validatable is Validatable<true> & Assumption {

    return validatable.valid === true;
}
