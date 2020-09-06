import Validatable from "../validatable";
import Infer from "./infer";

export type Extend<ValidatableType extends Validatable, Elevate extends Infer<ValidatableType>> = {
    [Key in keyof ValidatableType]: Key extends 'valid' ? Elevate : ValidatableType[Key];
};

export default Extend;
