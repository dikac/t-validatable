import Validatable from "../../dist/assert/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe("valid", function() {

    it("class", () =>{
        let data = {valid:true};
        expect(data.valid).toBeTrue()
    });

    it("object", () => {
        let object = { valid : true};
        expect(object.valid).toBeTrue();
    });

    it("getter", () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
        }
        let data = new Getter;

        expect(data.valid).toBeTrue()
    });


    it("getter + setter", () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
            set valid (value : boolean)  {
            }
        }

        expect((new Getter).valid).toBeTrue()
    });

    it("plain object", () => {

        let data = { valid :  true};
        expect(data.valid).toBeTrue();
    });

});



describe("invalid", function() {

    it("class", () => {

        let data = new String('a');

        try {

            Validatable(data);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it("setter", () => {

        class Setter {
            set valid (value : boolean)  {

            }
        }

        let data = new Setter;

        try {

            Validatable(data);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

});
