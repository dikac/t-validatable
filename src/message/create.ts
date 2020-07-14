import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";

export default function Create<Val, Valid extends boolean, Msg>(value : Val, valid : Valid, message : Msg) : Validatable<Valid> & Value<Val> & Message<Msg> {

    return {
        message : message,
        valid : valid,
        value : value
    };
}
