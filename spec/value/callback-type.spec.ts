import CallbackType from "../../dist/value/callback-type";
import Type from "@dikac/t-object/boolean/type";
import StdValue from "@dikac/t-value/standard";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('invalid', function () {

    let callback = CallbackType(StdValue(1), Type);

    it("data", () => {
        expect(callback.valid).toBeFalse()
        expect(callback.value).toBe(1)
    });

});


describe('valid', function () {

    let callback = CallbackType(StdValue({}), Type);

    it("data", () => {
        expect(callback.valid).toBeTrue()
        expect(callback.value).toEqual({})
    });
});


describe('compiler pass', function () {

    function accept(object : object) {}
    function string(string : string) {}

    let callback = CallbackType(StdValue('string'), Type);

    it("test", () => {

        if(callback.valid) {

            accept(callback.value); // compiler pass
            expect(callback.valid).toBeTrue()
            expect(callback.value).toEqual({})

        } else {

            string(callback.value); // compiler pass
            expect(callback.valid).toBeFalse()
            expect(typeof callback.value === "object").toBeFalse()
        }
    })

});

