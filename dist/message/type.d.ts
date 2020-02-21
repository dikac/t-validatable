import TypeInterface from "../type";
import Message from "@dikac/t-message/message";
import TypeWrapper from "../type-wrapper";
export default class Type<V extends TypeInterface, M> extends TypeWrapper<V> implements TypeInterface, Message<M> {
    private messageFactory;
    constructor(validatable: V, messageFactory: (type: string) => M);
    get message(): M;
}
