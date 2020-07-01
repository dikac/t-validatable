import Validatable from "../validatable";
import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/infer/message";
import ValueWrapper from "../value/wrapper";
import Value from "@dikac/t-value/value";
/**
 * read only wrapper for {@link Message}, {@link Value} and {@link Validatable}
 */
export default class Wrapper<Subject extends Validatable & Message & Value = Validatable & Message & Value> extends ValueWrapper<Subject> implements Readonly<Message<InferMessage<Subject>>> {
    get message(): InferMessage<Subject>;
}
