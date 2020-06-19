import Callback from "../../dist/message/callback";
import WrapperMerge from "../../dist/value/wrapper-merge";
import Validatable from "../../dist/validatable";
import Value from "@dikac/t-value/value";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

function TestMessage (value : any, valid : boolean) {
    return 'type:' + typeof value + ', valid:' + (valid ? 'true' : 'false')
}

describe('construct', function () {

    it("data", () => {

        let standard = new WrapperMerge(
            {value:1},
            {valid:true},
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
            <Value<string|number>>{value:1},
            <Validatable<boolean>>{valid:true},
        );

        let wrapper = new Callback(standard, TestMessage);

        standard.subjectValue.value = 'str';
        standard.subjectValidatable.valid = false;

        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe('str')
        expect(wrapper.message).toBe('type:string, valid:false')
    });

});
