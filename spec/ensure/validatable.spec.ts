import Guard from "../../dist/ensure/validatable";
import Type from "../../dist/boolean/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe("valid", function() {

    it("class", () =>{

        let data = {valid:true};
        let guarded = Guard(data);

        expect(Type(guarded)).toBeTrue()
    });

    it("object", () => {

        let object = { valid : true};
        let guarded = Guard(object);

        expect(Type(guarded)).toBeTrue()
    });

    it("getter", () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
        }
        let data = new Getter;

        let guarded = Guard(data);

        expect(Type(guarded)).toBeTrue()
    });


    it("getter + setter", () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
            set valid (value : boolean)  {
            }
        }

        let data = new Getter;

        let guarded = Guard(data);

        expect(Type(guarded)).toBeTrue()
    });

    it("plain object", () => {

        let data = { valid :  true};

        let guarded = Guard(data);

        expect(Type(guarded)).toBeTrue()
    });

});



describe("invalid", function() {

    it("class", () => {

        let data = new String('a');

        try {

            Guard(data);
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

            Guard(data);
            fail('exception should be thrown');

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

});
