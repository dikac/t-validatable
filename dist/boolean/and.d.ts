import Validatable from "../validatable";
export default function And<Validatables extends Iterable<Validatable>>(validatables: Validatables, defaults?: boolean): boolean;
