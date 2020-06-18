import Standard from "../dist/standard";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('construct', function () {

    it("true", () => {
        expect(Standard(true).valid).toBeTrue()
    });

    it("false", () => {
        expect(Standard(false).valid).toBeTrue()
    });

});
