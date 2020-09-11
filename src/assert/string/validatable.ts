import Sentences from "@dikac/t-string/message/sentences";
import Name from "@dikac/t-object/string/name";
/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function Validatable(
    valid : boolean,
    value : object,
    subject : string = '',
) : string {

    let sentence = new Sentences(valid);
    sentence.subject.push(subject, `"${Name(value)}"`);
    sentence.reject.push('is not compatible with');
    sentence.accept.push('is compatible with');
    sentence.expect.push('Validatable type');
    return sentence.message;
}
