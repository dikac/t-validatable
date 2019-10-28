import Invalid from "../../src/invalid";
import Is from "../../src/boolean/is";
import Standard from "../../src/standard";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("success", function() {
    it("class", () => expect(Is(new Standard(true))).toBe(true));
    it("object", () => expect(Is({ valid : true})).toBe(true));
});

describe("fail", function() {

    it("class", () => expect(Is(new String())).toBe(false));
    it("object", () => expect(Is({ valid : () => true})).toBe(false));
});
