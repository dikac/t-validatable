import Validatable from "../../validatable";
export default function Valid<Argument extends Validatable = Validatable>(string: Argument, conversion?: (value: Argument) => string): Error;
