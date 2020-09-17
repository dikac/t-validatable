/**
 * @deprecated
 * readonly wrapper for {@link Validatable}
 */
export default class Readonly {
    constructor(_valid) {
        this._valid = _valid;
    }
    get valid() {
        return this._valid;
    }
}
//# sourceMappingURL=readonly.js.map