import Type from "../../dist/boolean/type";
import Standard from "../../dist/standard";
import Record_ from "../../dist/record/record_";
import ValidValue from "../../dist/valid";
import InvalidValue from "../../dist/invalid";
import Invalid from "../../dist/record/invalid";
import Validatable from "../../dist/validatable";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

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

describe("check property", function() {

    let result = Invalid(record);

    it("invalid", () => {

        if(result.invalid) {

            expect(result.invalid.valid).toBe(false);

        } else {

            fail('property is not exits')
        }
    });

    it("valid", () => {

        expect(result.valid).toBeUndefined();
    });

    describe("invalids", () => {

        it("valid1", () => {

            if(result.invalids && result.invalids.invalid1) {

                expect(result.invalids.invalid1.valid).toBe(false);

            } else {

                fail('property is not exits')
            }
        });

        it("valid2", () => {

            if(result.invalids && result.invalids.invalid2) {

                expect(result.invalids.invalid2.valid).toBe(false);

            } else {

                fail('property is not exits')
            }
        });
    });

    it("mixed", () => {

        if(result.mixed) {

            if(result.mixed.invalid) {

                expect(result.mixed.invalid.valid).toBe(false);

            } else {

                fail('property is not exits')
            }

            expect(result.mixed.valid).toBeUndefined();

        } else {

            fail('property is not exits')
        }
    });



});

