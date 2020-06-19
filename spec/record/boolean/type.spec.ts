import Type from "../../../dist/record/boolean/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe('valid', function () {

    let record = {
        valid : {valid:true},
        invalid : {valid:false},
    };

    let object : object = record;

    it('valid', () => {

        let result = Type(object);
        expect(result).toBeTrue();
    })

    it('compiler pass', () => {

        if(Type(object)) {

            expect(object.valid.valid).toBeTrue();
            expect(object.invalid.valid).toBeFalse();

        } else {

            fail('type should valid')
        }
    })
});

describe('invalid', function () {

    let record = {
        valid : {valid:true},
        invalid : {valid:false},
        wrong : 1
    };

    let object : object = record;

    it('valid', () => {

        let result = Type(object);
        expect(result).toBeFalse();
    })

});


