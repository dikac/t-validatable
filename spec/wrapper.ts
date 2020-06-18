import Valid from "../dist/valid";
import Wrapper from "../dist/wrapper";
import Invalid from "../dist/invalid";
import Validatable from "../dist/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('valid', function () {

    it("valid", () => {
        let wrapper = new Wrapper(Valid());
        expect(wrapper.valid).toBeTrue();
    });

});

describe('invalid', function () {

    it("invalid", () => {
        let wrapper = new Wrapper(Invalid());
        expect(wrapper.valid).toBeTrue();
    });

});


describe('compiler compliant', function () {


    function True(valid : true) {
        expect(valid).toBeTrue();
    }

    function False(valid : false) {
        expect(valid).toBeFalse();
    }

    function Boolean(valid : boolean) {
        expect(typeof valid).toBe("boolean");
    }

    it("invalid", () => {

        let wrapper = new Wrapper(Invalid());
        False(wrapper.valid);
        Boolean(wrapper.valid);
    });


    it("invalid", () => {

        let wrapper = new Wrapper(Invalid());
        False(wrapper.valid);
        Boolean(wrapper.valid);
    });

    it("invalid", () => {

        let wrapper = new Wrapper<Validatable<boolean>>(Invalid());
        Boolean(wrapper.valid);
    });

});
