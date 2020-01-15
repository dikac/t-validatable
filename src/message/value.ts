import Result from "./result";

export default abstract class Type<Type> extends Result<Type> {

    constructor(
        data : Type,
        private validator : (value : Type) => boolean
    ) {

        super(data, validator(data));
    }

}