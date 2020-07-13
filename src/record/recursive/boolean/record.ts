import Validatable from "../../../validatable";
import TypeRecord from "@dikac/t-object/record/recursive/boolean/type";
import ValidatableType from "../../../boolean/validatable";
import PropertyType from "@dikac/t-object/key/boolean/type";
import RecursiveRecord from "@dikac/t-object/record/recursive/record";
import Guard from "@dikac/t-function/boolean/guard";

/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Record<
    Object extends RecursiveRecord<Key, Validatable>,
    Key extends PropertyKey
>(
    record : any,
    property : Guard<any, Key> = PropertyType
) : record is Object {

    return TypeRecord(record, ValidatableType, property)
}
