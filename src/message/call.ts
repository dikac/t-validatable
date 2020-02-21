import ValidatableInterface from "../validatable";
import Message from "@dikac/t-message/message";
import Wrapper from "../wrapper";

export default class Call<V extends ValidatableInterface, M> extends Wrapper<V> implements Readonly<Message<M>> {

    constructor(
        validatable : V,
        readonly messageFactory : () =>  M
    ) {

        super(validatable);
    }

    get message() : M {

        return this.messageFactory();
    }
}
