import Record from "@dikac/t-object/record/recursive/record";
import Validatable from "../../../validatable";
import Empty from "@dikac/t-object/boolean/empty";
import Valid from "../valid";

export default function And<
    Object extends Record<PropertyKey, Validatable>
>(object : Object) : boolean {

    return !Empty(Valid(object));
}
