import ValidatableInterface from "../validatable";
import Message from "@dikac/t-message/message";
import Wrapper from "../wrapper";
export default class Validatable<V extends ValidatableInterface, M> extends Wrapper<V> implements Readonly<Message<M>> {
    readonly message: M;
    constructor(validatable: V, message: M);
}
