import ReadonlyValue from "../value/readonly";
import Message from "@dikac/t-message/message";

export default class Readonly<
    Val,
    Msg,
    Valid extends boolean
> extends
    ReadonlyValue<Val, Valid>
implements
    globalThis.Readonly<Message<Msg>>
{
    constructor(
        value : Val,
        valid : Valid,
        private _message : Msg,
    ) {
        super(value, valid);
    }

    get message() : Msg {

        return this._message;
    }
}
