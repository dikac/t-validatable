import Validatable from "../../validatable";
import Record from "@dikac/t-object/record/recursive/record";
import { DeepPartial } from "utility-types";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<V extends Validatable = Validatable, Object extends Record<keyof any, V> = Record<keyof any, V>>(record: Object): DeepPartial<Object>;
