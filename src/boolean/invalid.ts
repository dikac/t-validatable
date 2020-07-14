import Validatable from "../validatable";
import Valid from "../infer/valid";

export default function Invalid<Assumption extends Validatable>(validatable : Assumption) : validatable is Validatable<false> & Assumption {

    return validatable.valid === false;
}
