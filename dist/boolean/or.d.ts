import Validatable from "../validatable";
export default function Or<Validatables extends Iterable<Validatable>>(validatables: Validatables, defaults?: boolean): boolean;
