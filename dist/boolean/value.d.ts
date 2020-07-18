import Validatable from "../validatable";
export default function Value<Bool extends boolean>(validatable: Validatable<Bool>): Bool;
