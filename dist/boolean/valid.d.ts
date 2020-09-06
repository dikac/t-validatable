import Validatable from "../validatable";
export default function Valid<Assumption extends Validatable>(validatable: Assumption): validatable is Validatable<true> & Assumption;
