import Validatable from "../validatable";
import Valid from "../valid";
import Record from "../record/record";
import Type from "./type";
import TypeObject from "@dikac/t-object/boolean/type";


export default function Record_(record : Record) : boolean {

    let valid : boolean = true;

    for(let property in record) {

        const value = record[property];

        if(Type(value)) {

           valid = valid && value.valid;

        } else if(TypeObject(value)) {

            valid = valid && Record_(value);

        } else {

            throw new Error(`property ${property} is not type of Validatable, or record of Validatable`)
        }
    }

    return valid;
}
