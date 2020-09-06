import Validatable from "../validatable";
/**
 * check if {@param value} is compatible to {@link Validatable} type
 */
export default function Validatable(value: object): value is Validatable;
