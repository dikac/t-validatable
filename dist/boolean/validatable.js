import TypeBoolean from "@dikac/t-boolean/boolean";
/**
 * check if {@param value} is compatible to {@link Validatable} type
 */
export default function Validatable(value) {
    if (TypeBoolean(value.valid)) {
        return true;
    }
    return false;
}
//# sourceMappingURL=validatable.js.map