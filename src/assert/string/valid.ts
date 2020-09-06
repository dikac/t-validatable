import Value from "@dikac/t-value/value";
import Name from "@dikac/t-object/string/name";
import Validatable from "../../validatable";
import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Valid<ValidatableType extends Validatable>(
    validatable: ValidatableType,
    subject : string = '',
    conversion : (object : ValidatableType) => string = Name,
) : string {

    let sentence = SentencesIs(validatable.valid);
    sentence.subject.push(subject, conversion(validatable));
    sentence.object = ['valid'];

    return sentence.message;
}
