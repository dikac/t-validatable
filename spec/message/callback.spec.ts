import Callback from "../../dist/message/callback";
import WrapperMerge from "../../dist/value/wrapper-merge";
import StdValue from "@dikac/t-value/standard";
import ValidatableStandard from "../../dist/standard";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

function TestMessage (value : any, valid : boolean) {
    return 'type:' + typeof value + ', valid:' + (valid ? 'true' : 'false')
}

describe('construct', function () {

    it("data", () => {

        let standard = new WrapperMerge(
            StdValue(1),
            ValidatableStandard(true),
        );

        let wrapper = new Callback(standard, TestMessage);

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toBe(1)
        expect(wrapper.message).toBe('type:number, valid:true')
    });

});


describe('set', function () {

    it("data", () => {

        let standard = new WrapperMerge(
            StdValue<string|number>(1),
            ValidatableStandard<boolean>(true),
        );

        let wrapper = new Callback(standard, TestMessage);

        standard.subjectValue.value = 'str';
        standard.subjectValidatable.valid = false;

        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe('str')
        expect(wrapper.message).toBe('type:string, valid:false')
    });

});
