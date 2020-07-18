import Validatable from "../validatable";

/**
 * {@link Boolean} valid value type
 */
type Boolean<Instance> = Instance extends Validatable<infer As> ? As : never;

export default Boolean;
