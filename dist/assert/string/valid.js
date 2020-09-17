import Name from "@dikac/t-object/string/name";
import Sentence from "@dikac/t-string/message/sentence";
export default function Valid(validatable, conversion = Name) {
    let sentence = new Sentence(validatable.valid);
    sentence.subject = conversion(validatable);
    sentence.reject = 'is not';
    sentence.expect = 'valid';
    return sentence.message;
}
//# sourceMappingURL=valid.js.map