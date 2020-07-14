import Validatable from "../../../validatable";
import RecursiveRecord from "@dikac/t-object/record/recursive/record";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Record<Object extends RecursiveRecord<Key, Validatable>, Key extends PropertyKey>(record: any, property?: Guard<any, Key>): record is Object;
