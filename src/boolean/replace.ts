import Validatable from "../validatable";

export type Replace<ValidatableT extends Validatable, Replace extends boolean> = {
    [Key in keyof ValidatableT]: Key extends 'valid' ? Replace : ValidatableT[Key];
};

export default Replace;
