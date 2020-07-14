import Invalid from "../../dist/boolean/invalid";
import Validatable from "../../dist/validatable";
import Value from "@dikac/t-value/value";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function () {

    let argument : Validatable & Value<string> = {
        valid : true,
        value : 'string'
    }

    if(Invalid(argument)) {

        let valid : false = argument.valid;

        // @ts-expect-error
        let invalid : true = argument.valid;

        let boolean : boolean = argument.valid;

    } else {

        let value : boolean = argument.valid;
    }
});

it('valid', ()=>{

    let argument : Validatable & Value<string> = {
        valid : false,
        value : 'string'
    }

    expect(Invalid(argument)).toBeTrue();
});


it('invalid', ()=>{

    let argument : Validatable & Value<string> = {
        valid : true,
        value : 'string'
    }

    expect(Invalid(argument)).toBeFalse();
});
