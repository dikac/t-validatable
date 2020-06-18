import Valid from "../dist/valid";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('call', function () {

    it("valid", () => {
        expect(Valid().valid).toBeTrue()
    });

});
