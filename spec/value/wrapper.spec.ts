import Wrapper from "../../dist/value/wrapper";
import WrapperMerge from "../../dist/value/wrapper-merge";
import StandardValue from "@dikac/t-value/standard";
import Standard from "../../dist/standard";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('construct', function () {

    it("data", () => {

        let standard = new WrapperMerge(
            StandardValue(1),
            Standard<boolean>(true)
        );

        let wrapper = new Wrapper(standard);

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toBe(1)
    });

});


describe('set', function () {

    it("data", () => {
        let standard = new WrapperMerge(
            StandardValue(1),
            Standard<boolean>(true)
        );
        let wrapper = new Wrapper(standard);

        standard.subjectValue.value = 3;
        standard.subjectValidatable.valid = false;

        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe(3)
    });

});
