import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/infer/message";
import Validatable from "../validatable";
import ValueWrapperMerge from "../value/readonly-merge";
import Value from "@dikac/t-value/value";
/**
 * merge {@link Value}, {@link Message} and {@link Validatable}
 */
export default class ReadonlyMerge<Val extends Value, Msg extends Message, Instance extends Validatable> extends ValueWrapperMerge<Val, Instance> implements Readonly<Message<InferMessage<Msg>>> {
    protected subjectMessage: Msg;
    constructor(subjectValue: Val, subjectMessage: Msg, subjectValidatable: Instance);
    get message(): InferMessage<Msg>;
}