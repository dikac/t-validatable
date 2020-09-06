import SentencesIs from "@dikac/t-string/message/sentences-is";
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

    const sentence = SentencesIs(valid);

    sentence.subject.push(subject);
    sentence.subject.push(Name(value));
    sentence.object = ['Validatable compatible'];
    return sentence.message;
}
