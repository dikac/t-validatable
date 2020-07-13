import Validatable from "../../validatable";
import TypeRecord from "@dikac/t-object/record/boolean/type";
import ValidatableType from "../../boolean/validatable";
import PropertyType from "@dikac/t-object/key/boolean/type";
import Guard from "@dikac/t-function/boolean/guard";

/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Record<
    Key extends PropertyKey
>(
    record : any,
    property : Guard<any, Key> = PropertyType
) : record is Record<Key, Validatable> {

    return TypeRecord(record, ValidatableType, property);
}
