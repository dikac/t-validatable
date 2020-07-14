export default function Validatable(value : unknown, valid : boolean) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `value "${string}" is Validatable compatible`;

    } else {

        return `value "${string}" is not Validatable compatible`;
    }
}
