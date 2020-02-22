import Property from "./property";
import Type from "../../type/type";
import Value from "@dikac/t-value/value";
import PropertyInterface from "@dikac/t-object/property/property";

export default function PropertyActual<P extends string|number>(data : Value<string> & Type & PropertyInterface<P>) : string {

    return Property(data) + `, actual '${data.value}'`
}
