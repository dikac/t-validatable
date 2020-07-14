import ReadonlyValue from "../value/readonly";
import Message from "@dikac/t-message/message";
export default class Readonly<Val, Msg, Valid extends boolean> extends ReadonlyValue<Val, Valid> implements globalThis.Readonly<Message<Msg>> {
    private _message;
    constructor(value: Val, valid: Valid, _message: Msg);
    get message(): Msg;
}
