import TypeInterface from "../type/type";
import Message from "@dikac/t-message/message";
import Wrapper from "../type/wrapper";
export default class Type<V extends TypeInterface, M> extends Wrapper<V> implements TypeInterface, Message<M> {
    private messageFactory;
    constructor(validatable: V, messageFactory: (type: string) => M);
    get message(): M;
}
