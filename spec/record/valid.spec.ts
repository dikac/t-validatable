import Type from "../../dist/boolean/type";
import Standard from "../../dist/standard";
import Record_ from "../../dist/record/record_";
import ValidValue from "../../dist/valid";
import InvalidValue from "../../dist/invalid";
import Valid from "../../dist/record/valid";
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

    let result = Valid(record);

    it("valid", () => {

        if(result.valid) {

            expect(result.valid.valid).toBe(true);

        } else {

            fail('property is not exits')
        }
    });

    it("invalid", () => {

        expect(result.invalid).toBeUndefined();
    });

    describe("valids", () => {

        it("valid1", () => {

            if(result.valids && result.valids.valid1) {

                expect(result.valids.valid1.valid).toBe(true);

            } else {

                fail('property is not exits')
            }
        });

        it("valid2", () => {

            if(result.valids && result.valids.valid2) {

                expect(result.valids.valid2.valid).toBe(true);

            } else {

                fail('property is not exits')
            }
        });
    });

    it("invalids", () => {

        expect(result.invalids).toBeUndefined();
    });


    it("mixed", () => {

        if(result.mixed) {

            if(result.mixed.valid) {

                expect(result.mixed.valid.valid).toBe(true);

            } else {

                fail('property is not exits')
            }

            expect(result.mixed.invalid).toBeUndefined();

        } else {

            fail('property is not exits')
        }
    });

});

