import Validatable from "../validatable";
import Record from "@dikac/t-object/record/record";
import Type from "../boolean/type";
import {DeepPartial} from "utility-types";
import Filter from "@dikac/t-object/record/filter";

export default function Valid<
    V extends Validatable = Validatable,
    O extends Record<V> = Record<V>
>(record : O) : DeepPartial<O> {

    return Filter(record, (v : Validatable) => v.valid, Type);
}
