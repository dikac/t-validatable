import WrapperMerge from "../../dist/message/wrapper-merge";
import StdValue from "@dikac/t-value/standard";
import StandardMessage from "@dikac/t-message/standard";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('construct', function () {

    it("data", () => {

        let wrapper = new WrapperMerge(
            StdValue(1),
            new StandardMessage('message'),
            {valid:true},
        );

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toBe(1)
        expect(wrapper.message).toBe('message')
    });

});


describe('set', function () {

    it("data", () => {
        let value =  StdValue(1);
        let message = new StandardMessage('message');
        let validatable =  {valid:true};
        let wrapper = new WrapperMerge(value, message, validatable);

        value.value = 3;
        validatable.valid = false;
        message.message = 'message 2';

        expect(wrapper.message).toBe('message 2')
        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe(3)
    });

});
