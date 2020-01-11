import Validatable from "../validatable";
import Message from "@dikac/t-message/message";
import Immutable from "@dikac/t-value/immutable";
export default abstract class Result<Type> implements Validatable, Message, Immutable<Type> {
    readonly data: Type;
    readonly valid: boolean;
    constructor(data: Type, valid?: boolean);
    get message(): string;
    protected abstract getMessage(data: any, valid: boolean): string;
    get value(): Type;
}
