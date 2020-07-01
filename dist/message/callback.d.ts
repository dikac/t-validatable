import Message from "@dikac/t-message/message";
import Validatable from "../validatable";
import Value from "@dikac/t-value/value";
import Wrapper from "../value/wrapper";
export default class Callback<Msg, Subject extends Validatable & Value = Validatable & Value> extends Wrapper<Subject> implements Readonly<Message<Msg>> {
    callback: (value: Subject) => Msg;
    constructor(subject: Subject, callback: (value: Subject) => Msg);
    get message(): Msg;
}
