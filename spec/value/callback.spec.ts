import Callback from "../../dist/value/callback";
import Type from "@dikac/t-object/boolean/type";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('invalid', function () {

    let callback = Callback(1, Type);

    it("data", () => {
        expect(callback.valid).toBeFalse()
        expect(callback.value).toBe(1)
    });

});


describe('valid', function () {

    let callback = Callback({}, Type);

    it("data", () => {
        expect(callback.valid).toBeTrue()
        expect(callback.value).toEqual({})
    });
});


describe('compiler pass', function () {

    function string(string : string) {}

    let callback = Callback('string', Type);

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

