import ThrowableType from "../assert/throwable/validatable";
import AssertType from "../assert/validatable";
/**
 * Throw exception if given value is no {@link Validatable} type
 *
 */
export default function Validatable(value, errorFactory = ThrowableType) {
    AssertType(value, errorFactory);
    return value;
}
//# sourceMappingURL=validatable.js.map