import Callback from "./callback";
export default function CallbackFromObject(object) {
    return new Callback(object.argument, object.validation);
}
//# sourceMappingURL=callback-from-object.js.map