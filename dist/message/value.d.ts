import Result from "./result";
export default abstract class Type<Type> extends Result<Type> {
    private validator;
    constructor(data: Type, validator: (value: Type) => boolean);
}
