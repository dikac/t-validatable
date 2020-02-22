import Validatable from "../validatable";
import Type from "./type";
import Wrapper from "../wrapper";

/**
 * wrap standard validatable, and add type interface
 */

export default class ValidatableWrapper<V extends Validatable> extends Wrapper<V> implements Readonly<Type>{

    constructor(
        validatable : V,
        public  type : string
    ) {

        super(validatable);
    }
}
