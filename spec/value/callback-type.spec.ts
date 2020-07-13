import CallbackType from "../../dist/value/callback-type";
import Type from "@dikac/t-object/boolean/type";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('invalid', function () {

    let callback = CallbackType<any, object>(1, Type);

    it("data", () => {
        expect(callback.valid).toBeFalse()
        expect(callback.value).toBe(1)
    });

});

describe('valid', function () {

    let callback = CallbackType({}, Type);

    it("data", () => {
        expect(callback.valid).toBeTrue()
        expect(callback.value).toEqual({})
    });
});

describe('compiler pass', function () {

    let callback = CallbackType<any, object>('string', Type);

    it("test", () => {

        if(callback.valid) {

            let object : object = callback.value; // compiler pass
            expect(callback.valid).toBeTrue()
            expect(callback.value).toEqual({})

        } else {

            let string : string = callback.value; // compiler pass
            expect(callback.valid).toBeFalse()
            expect(typeof callback.value === "object").toBeFalse()
        }
    })

});

