// import Value from "@dikac/t-value/value";
// import ValueInfer from "@dikac/t-value/infer/value";
// import Validatable from "../validatable";
// import Valid from "../infer/valid";
// import Readonly from "./readonly";
//
// /**
//  * merge {@link Value} and {@link Validatable}
//  */
//
// export default function ReadonlyObject<
//     Val,
//     Valid extends boolean
// >(
//     value: Value<Val>,
//     validatable: Validatable<Valid>
// ) :
//     globalThis.Readonly<Validatable<Valid>> &
//     globalThis.Readonly<Value<Val>>
// {
//
//     return new Readonly(value.value, validatable.valid);
// }
//# sourceMappingURL=readonly-object.js.map