import Validatable from "./validatable";
import Type from "./type";
import Wrapper from "./wrapper";
export default class TypeWrapper<V extends Validatable> extends Wrapper<V> implements Readonly<Type> {
    type: string;
    constructor(validatable: V, type: string);
}
