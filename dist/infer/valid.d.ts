import Validatable from "../validatable";
declare type Valid<Instance> = Instance extends Validatable<infer As> ? As : never;
export default Valid;
