import Validatable from "../validatable";
import Record_ from "./record_";
import Type from "../boolean/type";
import TypeObject from "@dikac/t-object/boolean/type";
import {DeepPartial} from "utility-types";
import Empty from "@dikac/t-object/boolean/empty";

export default function Result<
    V extends Validatable = Validatable,
    O extends Record_<V> = Record_<V>
>(record : O, valid : boolean) : DeepPartial<O> {

    let result : Record_<V> = {};

    for(let property in record) {

        const value : Record_<V> = <Record_<V>> record[property];

        if(Type(value)) {

           if(value.valid === valid) {

               result[property] = value;
           }

        } else if(TypeObject(value)) {

            const results = <Record_<V>> Result(value, valid);

            if(!Empty(results)) {

                result[property] = results;
            }

        } else {

            throw new Error(`property ${property} is not type of Validatable, or record of Validatable`)
        }
    }

    return <DeepPartial<O>> result;
}
