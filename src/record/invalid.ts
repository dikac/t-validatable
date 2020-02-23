import Validatable from "../validatable";
import Record from "@dikac/t-object/record/record";
import Filter from "@dikac/t-object/record/filter";
import Type from "../boolean/type";
import {DeepPartial} from "utility-types";

export default function Invalid<
    V extends Validatable = Validatable,
    O extends Record<V> = Record<V>
    >(record : O) : DeepPartial<O> {

    return Filter(record, (v : Validatable) => !v.valid, Type);
}
