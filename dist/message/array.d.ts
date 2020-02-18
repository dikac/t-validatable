import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Validatable from "../validatable";
export default class Array_<Type> implements Validatable, Message<string[]>, Readonly<Value<Type>> {
    private data;
    private results;
    readonly valids: (Validatable & Message<string>)[];
    readonly invalids: (Validatable & Message<string>)[];
    constructor(data: Type, results: (Validatable & Message<string>)[]);
    get valid(): boolean;
    get message(): string[];
    get value(): Type;
}
