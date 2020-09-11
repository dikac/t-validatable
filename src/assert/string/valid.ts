import Value from "@dikac/t-value/value";
import Name from "@dikac/t-object/string/name";
import Validatable from "../../validatable";
import Sentence from "@dikac/t-string/message/sentence";

export default function Valid<ValidatableType extends Validatable>(
    validatable: ValidatableType,
    conversion : (object : ValidatableType) => string = Name,
) : string {

    let sentence = new Sentence(validatable.valid);

    sentence.subject = conversion(validatable);
    sentence.reject = 'is not';

    sentence.expect = 'valid';

    return sentence.message;
}
