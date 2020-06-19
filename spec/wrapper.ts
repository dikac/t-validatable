import Wrapper from "../dist/wrapper";
import Validatable from "../dist/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('valid', function () {

    it("valid", () => {
        let wrapper = new Wrapper({valid:true});
        expect(wrapper.valid).toBeTrue();
    });

});

describe('invalid', function () {

    it("invalid", () => {
        let wrapper = new Wrapper({valid:false});
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

        let wrapper = new Wrapper({valid:false});
        False(wrapper.valid);
        Boolean(wrapper.valid);
    });


    it("invalid", () => {

        let wrapper = new Wrapper({valid:false});
        False(wrapper.valid);
        Boolean(wrapper.valid);
    });

    it("invalid", () => {

        let wrapper = new Wrapper<Validatable<boolean>>({valid:false});
        Boolean(wrapper.valid);
    });

});
