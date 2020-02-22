import ValueInterface from "@dikac/t-value/value";
import Type from "../../type/type";
import Value from "./value";


export default function ValueActual(data : ValueInterface<string> & Type) : string {

    return Value(data) + `, actual '${data.value}'`
}
