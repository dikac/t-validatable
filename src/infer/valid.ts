import Validatable from "../validatable";

/**
 * {@link Valid} valid value type
 */
type Valid<Instance> = Instance extends Validatable<infer As> ? As : never;

export default Valid;
