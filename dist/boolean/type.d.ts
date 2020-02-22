import Validatable from "../validatable";
export default function Type<Assumption extends Validatable = Validatable>(value: any): value is Assumption;
