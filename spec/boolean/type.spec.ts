import Type from "../../dist/boolean/type";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe("valid", function() {


    it("class", () =>{

        let data = {valid:true};
        expect(Type(data)).toBeTrue()

        if(Type(data)) {

            let type : boolean = data.valid; // compiler pass
        }
    });

    it("object", () => {

        let data = { valid : true};
        expect(Type(data)).toBeTrue();

        if(Type(data)) {

            let type : boolean = data.valid; // compiler pass
        }
    });

    it("getter", () => {

        class Getter {
            get valid () : boolean {
                return true;
            }
        }
        let data = new Getter;

        expect(Type(data)).toBeTrue()


        if(Type(data)) {

            let type : boolean = data.valid; // compiler pass
        }
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

        expect(Type(data)).toBeTrue()


        if(Type(data)) {

            let type : boolean = data.valid; // compiler pass
        }
    });

    it("plain object", () => {

        let data = { valid :  true};
        expect(Type(data)).toBeTrue();

        if(Type(data)) {

            let type : boolean = data.valid; // compiler pass
        }
    });

});



describe("invalid", function() {

    it("class", () => {

        let data = new String('a');
        expect(Type(data)).toBeFalse();

    });

    it("setter", () => {

        class Setter {
            set valid (value : boolean)  {

            }
        }

        let data = new Setter;

        expect(Type(data)).toBeFalse()
    });

});
