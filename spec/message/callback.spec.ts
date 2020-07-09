import Callback from "../../dist/message/callback";
import Validatable from "../../dist/validatable";
import Value from "@dikac/t-value/value";
import Type from "@dikac/t-object/boolean/type";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

function TestMessage (value : Validatable & Value) {
    return 'type:' + typeof value.value + ', valid:' + (value.valid ? 'true' : 'false')
}

describe('construct', function () {

    it("data", () => {

        // let standard = new WrapperMerge(
        //     {value:1},
        //     {valid:true},
        // );

        let wrapper = Callback({}, Type, TestMessage);

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toEqual({})
        expect(wrapper.message).toBe('type:object, valid:true')
    });

});


describe('set', function () {

    it("data", () => {
        //
        // let standard = new WrapperMerge(
        //     <Value<string|number>>{value:1},
        //     <Validatable<boolean>>{valid:true},
        // );

        let wrapper = Callback('str', Type, TestMessage);

       //standard.subjectValue.value = 'str';
       //standard.subjectValidatable.valid = false;

        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe('str')
        expect(wrapper.message).toBe('type:string, valid:false')
    });

});
