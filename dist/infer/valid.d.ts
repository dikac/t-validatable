import Validatable from "../validatable";
/**
 * {@link Valid} valid value type
 */
declare type Valid<Instance> = Instance extends Validatable<infer As> ? As : never;
export default Valid;
