import Callback from "../../dist/value/callback";
import Type from "@dikac/t-object/boolean/type";
import StdValue from "@dikac/t-value/standard";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('invalid', function () {

    let callback = Callback(StdValue(1), Type);

    it("data", () => {
        expect(callback.valid).toBeFalse()
        expect(callback.value).toBe(1)
    });

});


describe('valid', function () {

    let callback = Callback(StdValue({}), Type);

    it("data", () => {
        expect(callback.valid).toBeTrue()
        expect(callback.value).toEqual({})
    });
});


describe('compiler pass', function () {

    function string(string : string) {}

    let callback = Callback(StdValue('string'), Type);

    it("test", () => {

        if(callback.valid) {

            expect(callback.valid).toBeTrue()
            expect(callback.value).toEqual('string')

        } else {

            string(callback.value);
            expect(callback.valid).toBeFalse()
            expect(typeof callback.value === "object").toBeFalse()
        }
    })

});

