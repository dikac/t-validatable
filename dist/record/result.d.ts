import Validatable from "../validatable";
import Record from "./record";
import { DeepPartial } from "utility-types";
export default function Result<V extends Validatable = Validatable, O extends Record<V> = Record<V>>(record: O, valid: boolean): DeepPartial<O>;
