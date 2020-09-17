import ValidType from "../string/valid";
export default function Valid(string, conversion = value => typeof value) {
    return new Error(ValidType(string, conversion));
}
//# sourceMappingURL=valid.js.map