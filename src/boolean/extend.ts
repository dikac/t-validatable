import Validatable from "../validatable";
import Infer from "./infer";

export type Extend<ValidatableT extends Validatable, Elevate extends Infer<ValidatableT>> = {
    [Key in keyof ValidatableT]: Key extends 'valid' ? Elevate : ValidatableT[Key];
};

export default Extend;
