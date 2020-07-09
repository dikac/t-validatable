import Wrapper from "../../dist/message/readonly-wrapper";
import WrapperMerge from "../../dist/message/wrapper-merge";
import Validatable from "../../dist/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('construct', function () {

    it("data", () => {

        let standard = new WrapperMerge(
            {value:1},
            {message:'message'},
            {valid:true},
        );

        let wrapper = new Wrapper(standard);

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toBe(1)
        expect(wrapper.message).toBe('message')
    });

});


describe('set', function () {

    it("data", () => {

        let standard = new WrapperMerge(
            {value:1},
            {message:'message'},
            <Validatable<boolean>>{valid:true},
        );

        let wrapper = new Wrapper(standard);

        standard.subjectValue.value = 3;
        standard.subjectValidatable.valid = false;
        standard.subjectMessage.message = 'message 2';

        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe(3)
        expect(wrapper.message).toBe('message 2')
    });

});
