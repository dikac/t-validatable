import WrapperMerge from "../../dist/value/wrapper-merge";
import StdValue from "@dikac/t-value/standard";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('construct', function () {

    it("data", () => {

        let wrapper = new WrapperMerge(
            StdValue(1),
            {valid:true}
        );

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toBe(1)
    });

});


describe('set', function () {

    it("data", () => {
        let value =  StdValue(1);
        let validatable = {valid:true};
        let wrapper = new WrapperMerge(value, validatable);

        value.value = 3;
        validatable.valid = false;

        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe(3)
    });

});
