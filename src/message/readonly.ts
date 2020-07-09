// import ReadonlyValue from "../value/readonly";
// import Message from "@dikac/t-message/message";
//
// export default class Readonly<
//     Val,
//     Msg,
//     Valid extends boolean
// > extends
//     ReadonlyValue<Val, Valid>
// implements
//     globalThis.Readonly<Message<Msg>>
// {
//     constructor(
//         value : Val,
//         private _message : Msg,
//         valid : Valid,
//     ) {
//         super(value, valid);
//     }
//
//     get message() : Msg {
//
//         return this._message;
//     }
// }
