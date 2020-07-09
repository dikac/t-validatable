import Validatable from "../../../validatable";
import TypeRecord from "@dikac/t-object/record/recursive/boolean/type";
import ValidatableType from "../../../boolean/type";
import PropertyType from "@dikac/t-object/key/boolean/type";
import Record from "@dikac/t-object/record/recursive/record";
import Property from "@dikac/t-object/property/property";

/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Type<
    Object extends Record<Key, Validatable>,
    Key extends Property = Property
>(
    record : any,
    property : (value : any) => value is Key = PropertyType
) : record is Object {

    return TypeRecord(record, ValidatableType, property)
}
