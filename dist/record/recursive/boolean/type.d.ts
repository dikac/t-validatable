import Validatable from "../../../validatable";
import Record from "@dikac/t-object/record/recursive/record";
/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Type<Object extends Record<Key, Validatable>, Key extends PropertyKey>(record: any, property?: (value: any) => value is Key): record is Object;
