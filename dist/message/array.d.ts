import Message from "t-message/message";
import Immutable from "t-value/immutable";
import Validatable from "../validatable";
export default class Array_<Type> implements Validatable, Message<string[]>, Immutable<Type> {
    private data;
    private results;
    readonly valids: (Validatable & Message<string>)[];
    readonly invalids: (Validatable & Message<string>)[];
    constructor(data: Type, results: (Validatable & Message<string>)[]);
    get valid(): boolean;
    get message(): string[];
    get value(): Type;
}
