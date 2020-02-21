import Validatable from "./validatable";
import Type from "./type";
import Wrapper from "./wrapper";

export default class TypeWrapper<V extends Type> extends Wrapper<V> implements Readonly<Type>{

    get type() : string {

        return this.validatable.type;
    }
}
