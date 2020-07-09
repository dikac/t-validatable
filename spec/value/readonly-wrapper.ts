import Wrapper from "../../dist/value/readonly-wrapper";
import WrapperMerge from "../../dist/value/readonly-merge";
import Validatable from "../../dist/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('construct', function () {

    it("data", () => {

        let standard = new WrapperMerge(
            {value:1},
            {valid:true}
        );

        let wrapper = new Wrapper(standard);

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toBe(1)
    });

});


describe('set', function () {

    it("data", () => {
        let standard = new WrapperMerge(
            {value:1},
            <Validatable<boolean>>{valid:true}
        );
        let wrapper = new Wrapper(standard);

        standard.subjectValue.value = 3;
        standard.subjectValidatable.valid = false;

        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe(3)
    });

});
