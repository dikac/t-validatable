import Invalid from "../dist/invalid";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('call', function () {

    it("invalid", () => {
        expect(Invalid().valid).toBeFalse()
    });

});
