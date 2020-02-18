import Validatable from "../validatable";
import Record_ from "./record_";
import { DeepPartial } from "utility-types";
export default function Result<V extends Validatable = Validatable, O extends Record_<V> = Record_<V>>(record: O, valid: boolean): DeepPartial<O>;
