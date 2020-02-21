import TypeInterface from "../type";
import Message from "@dikac/t-message/message";
import TypeWrapper from "../type-wrapper";

export default class Type<V extends TypeInterface, M> extends TypeWrapper<V> implements TypeInterface, Message<M> {

    constructor(
        validatable : V,
        private messageFactory : (type : string) => M
    ) {
        super(validatable);
    }

    get message() : M {

        return this.messageFactory(this.validatable.type);
    }

}

