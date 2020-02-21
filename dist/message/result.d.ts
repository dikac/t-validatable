import Validatable from "../validatable";
import Message from "@dikac/t-message/message";
export default class Result<M> implements Validatable, Message<M> {
    private validatable;
    private messageFactory;
    constructor(validatable: Validatable, messageFactory: () => M);
    get valid(): boolean;
    get message(): M;
}
