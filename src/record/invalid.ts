import Validatable from "../validatable";
import Record_ from "./record_";
import Type from "../boolean/type";
import TypeObject from "@dikac/t-object/boolean/type";
import {DeepPartial} from "utility-types";
import Result from "./result";

export default function Invalid<
    V extends Validatable = Validatable,
    O extends Record_<V> = Record_<V>
    >(record : O) : DeepPartial<O> {

    return Result(record, false);
}
