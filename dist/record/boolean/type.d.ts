import Validatable from "../../validatable";
import Property from "@dikac/t-object/property/property";
/**
 * Check if {@param record} is record of {@link Validatable}
 * {@param property} also can be provided to validate property
 */
export default function Type<Key extends Property = Property>(record: any, property?: (value: any) => value is Key): record is Record<Key, Validatable>;
