import Type from "./type";
import ValidatableWrapper from "../wrapper";
/**
 * wrap type validatable
 */
export default class Wrapper<V extends Type> extends ValidatableWrapper<V> implements Readonly<Type> {
    get type(): string;
}
