import Validatable from "../validatable";
import Value from "@dikac/t-value/value";

export default function Create<Val, Valid extends boolean>(value : Val, valid : Valid) : Validatable<Valid> & Value<Val> {

    return {
        valid : valid,
        value : value
    };
}
