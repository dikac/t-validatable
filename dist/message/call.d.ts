import ValidatableInterface from "../validatable";
import Message from "@dikac/t-message/message";
import Wrapper from "../wrapper";
export default class Call<V extends ValidatableInterface, M> extends Wrapper<V> implements Readonly<Message<M>> {
    readonly messageFactory: () => M;
    constructor(validatable: V, messageFactory: () => M);
    get message(): M;
}
