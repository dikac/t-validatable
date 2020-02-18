import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Validatable from "../validatable";

export default class Array_<Type> implements Validatable, Message<string[]>, Readonly<Value<Type>> {

    readonly valids : (Validatable & Message<string>)[] = [];
    readonly invalids : (Validatable & Message<string>)[] = [];

    constructor(
        private data : Type,
        private results : (Validatable & Message<string>)[]
    ) {

        for (let result of results) {

            if(result.valid) {

                this.valids.push(result);

            } else {

                this.invalids.push(result);
            }
        }
    }

    get valid() : boolean {

        return this.invalids.length === 0;
    }

    get message() : string[] {

        let data = this.valid ? this.valids : this.invalids;

        return data.map(validator=>validator.message);

    }

    get value() : Type {

        if(this.valid) {

            return this.data;

        } else {

            throw new Error(this.message.join(', '))
        }
    }

}
