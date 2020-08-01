import Validatable from "../validatable";
/**
 * {@link Infer} valid value type
 */
declare type Infer<Instance> = Instance extends Validatable<infer As> ? As : never;
export default Infer;
