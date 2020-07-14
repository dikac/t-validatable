import Type from "@dikac/t-object/boolean/object";
import Asserted from "../../dist/value/asserted";
import Callback from "../../dist/value/callback";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('invalid', function () {


    let subject = Callback(1, Type);
    let callback = new Asserted(subject);

    it("check value", () => {
        try {
            let data = callback.value;
            fail('exception should thrown')
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }

    });

});


describe('valid', function () {

    let subject = Callback<{}>({}, Type);
    let callback = new Asserted(subject);

    it("check value", () => {
        expect(callback.valid).toBeTrue()
        expect(callback.value).toEqual({})
    });
});


