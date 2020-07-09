import Validatable from "../../validatable";
import TypeRecord from "@dikac/t-object/record/boolean/type";
import ValidatableType from "../../boolean/type";
import PropertyType from "@dikac/t-object/key/boolean/type";
import Property from "@dikac/t-object/property/property";

/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Type<
    Key extends PropertyKey
>(
    record : any,
    property : (value : any) => value is Key = PropertyType
) : record is Record<Key, Validatable> {

    return TypeRecord(record, ValidatableType, property);
}
