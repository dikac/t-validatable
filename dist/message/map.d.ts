import Validatable from "../validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export default class Map_<Type> implements Validatable, Message<Map<string, string>>, Readonly<Value<Type>> {
    private data;
    private results;
    readonly valids: Map<string, Validatable & Message<string>>;
    readonly invalids: Map<string, Validatable & Message<string>>;
    constructor(data: Type, results: Map<string, Validatable & Message<string>>);
    get valid(): boolean;
    get message(): Map<string, string>;
    get value(): Type;
}
