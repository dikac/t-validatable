import ValidValue from "../../../../dist/valid";
import InvalidValue from "../../../../dist/invalid";
import Type from "../../../../dist/record/recursive/boolean/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe('valid single dimension', function () {

    let record = {
        valid : ValidValue(),
        invalid : InvalidValue(),
    };

    let object : object = record;

    it('check result', () => {

        let result = Type(object);
        expect(result).toBeTrue();
    })

    it('compiler pass', () => {

        if(Type(object)) {

            expect(object.valid.valid).toBeTrue();
            expect(object.invalid.valid).toBeFalse();

        }
    })
});

describe('invalid single dimension', function () {

    let record = {
        valid : ValidValue(),
        invalid : InvalidValue(),
        wrong : 1
    };

    let object : object = record;

    it('check result', () => {

        let result = Type(object);
        expect(result).toBeFalse();
    })

});


describe('valid multi dimension', function () {


    let record = {
        valid : ValidValue(),
        invalid : InvalidValue(),
        valids : {
            valid1 : ValidValue(),
            valid2 : ValidValue(),
        },
        invalids : {
            invalid1 : InvalidValue(),
            invalid2 : InvalidValue(),
        },
        mixed : {
            valid : ValidValue(),
            invalid : InvalidValue(),
        }
    };

    let object : object = record;


    it('valid', () => {

        let result = Type(object);
        expect(result).toBeTrue();
    })

    it('compiler pass', () => {

        if(Type<typeof record>(object)) {

            expect(object.valid.valid).toBeTrue();
            expect(object.invalid.valid).toBeFalse();

            expect(object.valids.valid1.valid).toBeTrue();
            expect(object.valids.valid2.valid).toBeTrue();

            expect(object.invalids.invalid1.valid).toBeFalse();
            expect(object.invalids.invalid2.valid).toBeFalse();

            expect(object.mixed.valid.valid).toBeTrue();
            expect(object.mixed.invalid.valid).toBeFalse();

        }
    })
})

describe('invalid multi dimension', function () {


    let record = {
        valid : ValidValue(),
        invalid : InvalidValue(),
        valids : {
            valid1 : ValidValue(),
            valid2 : ValidValue(),
        },
        invalids : {
            invalid1 : InvalidValue(),
            invalid2 : InvalidValue(),
        },
        mixed : {
            valid : ValidValue(),
            invalid : InvalidValue(),
            wrong : 2
        }
    };

    let object : object = record;



    it('valid', () => {

        let result = Type(object);
        expect(result).toBeFalse();
    })


})
