/**
 * @deprecated
 * readonly wrapper for {@link Validatable}
 */
export default class ReadonlyWrapper {
    constructor(subject) {
        this.subject = subject;
    }
    get valid() {
        return this.subject.valid;
    }
}
//# sourceMappingURL=readonly-wrapper.js.map