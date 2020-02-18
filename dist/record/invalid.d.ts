import Validatable from "../validatable";
import Record_ from "./record_";
import { DeepPartial } from "utility-types";
export default function Invalid<V extends Validatable = Validatable, O extends Record_<V> = Record_<V>>(record: O): DeepPartial<O>;
