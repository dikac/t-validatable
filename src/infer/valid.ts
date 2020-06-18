import Validatable from "../validatable";

type Valid<Instance> = Instance extends Validatable<infer As> ? As : never;

export default Valid;
