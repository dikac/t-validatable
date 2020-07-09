// import Value from "@dikac/t-value/value";
// import ValueInfer from "@dikac/t-value/infer/value";
// import Readonly from "./readonly";
// import Validatable from "../validatable";
// import Callback from "./callback";
//
//
// /**
//  * same as {@link Callback} but with type
//  */
// export default function CallbackType<
//     Valid,
//     Value  = any,
// >(
//     value : Value,
//     callback : (value : any) => value is Valid
// ) : Readonly<Value, false> | Readonly<Valid, true> {
//
//     return <Readonly<Value, false> | Readonly<Valid, true>> Callback(value, callback)
// }
