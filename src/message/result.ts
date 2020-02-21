import Validatable from "../validatable";
import Message from "@dikac/t-message/message";


export default class Result<M> implements Validatable, Message<M> {

    constructor(
        private validatable : Validatable,
        private messageFactory : () => M
    ) {}

    get valid() : boolean {

        return this.validatable.valid;
    }

    get message() : M {

        return this.messageFactory();
    }

}

