import Valid from "../../dist/assert/valid";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

class Test {
    constructor(public valid : boolean) {
    }
}

describe("valid", function() {

    it("class", () =>{

        let validatable = new Test(true);
        expect(Valid(validatable)).toBeUndefined();
    });

    it("object", () => {

        let object = { valid : true};
        expect(Valid(object)).toBeUndefined();
    });

    it("getter", () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
        }
        let data = new Getter;

        expect(Valid(data)).toBeUndefined();
    });


    it("getter + setter", () => {

        class GetterSetter {
            get valid () : boolean {
                return true;
            }
            set valid (value : boolean)  {
            }
        }

        let data = new GetterSetter();
        expect(Valid(data)).toBeUndefined()
    });

});


describe("invalid", function() {

    it("class", () =>{

        let validatable = new Test(false);

        try {

            Valid(validatable);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it("object", () => {

        let object = { valid : false};

        try {

            Valid(object);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

    it("getter", () => {

        class Getter {
            get valid () : boolean {
                return false;
            }
        }
        let data = new Getter;

        try {

            Valid(data);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });


    it("getter + setter", () => {

        class GetterSetter {
            get valid () : boolean {
                return false;
            }
            set valid (value : boolean)  {
            }
        }

        let data = new GetterSetter();

        try {

            Valid(data)
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

});
