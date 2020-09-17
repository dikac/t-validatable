import Call from "@dikac/t-boolean/validation/boolean/call";
export default class Callback {
    constructor(argument, validation) {
        this.argument = argument;
        this.validation = validation;
    }
    get valid() {
        return Call(this);
    }
}
//# sourceMappingURL=callback.js.map