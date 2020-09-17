import ValueMemoize from "@dikac/t-value/memoize";
/**
 * @deprecated
 * Wrap {@link Validatable} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize {
    constructor(subject) {
        this.subject = subject;
        this.memoize = new ValueMemoize({
            get value() {
                return subject.valid;
            },
        });
    }
    get valid() {
        return this.memoize.value;
    }
}
//# sourceMappingURL=memoize.js.map