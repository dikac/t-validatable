import Validatable from "../dist/validatable";
import Or from "../dist/or";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('structure', function () {

    describe('subjects', function () {

        let subjects = [];
        let and = new Or<Validatable[]>(subjects, true);

        it("constructor", () => {
            expect(subjects === and.subjects).toBeTrue()
        });

        it("set", () => {
            let subjects2 = [];
            and.subjects = subjects2;
            expect(subjects === and.subjects).toBeFalse()
            expect(subjects2 === and.subjects).toBeTrue()
        });

    });

    describe('initial', function () {

        let initial = true;
        let and = new Or<Validatable[]>([], initial);

        it("constructor", () => {
            expect(initial === and.initial).toBeTrue()
        });

        it("set", () => {
            let initial2 = false;
            and.initial = initial2;
            expect(initial === and.initial).toBeFalse();
            expect(initial2 === and.initial).toBeTrue();
        });

    });

});

describe('empty', function () {

    describe('initial', function () {

        it("true", () => {
            let and = new Or<Validatable[]>([], true);
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            let and = new Or<Validatable[]>([], false);
            expect(and.valid).toBe(false)
        });

    });

    describe('set', function () {

        let and = new Or<Validatable[]>([], true);

        it("true", () => {
            and.initial = true;
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            and.initial = false;
            expect(and.valid).toBe(false)
        });

    });

});

describe("single", function() {

    describe('constructor', function () {

        it("true", () => {
            let and = new Or<Validatable[]>([{valid:true}], false);
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            let and = new Or<Validatable[]>([{valid:false}], true);
            expect(and.valid).toBe(false)
        });
    });

    describe('set', function () {

        let and = new Or<Validatable[]>([], true);

        it("true", () => {
            and.initial = false;
            and.subjects = [{valid:true}];
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            and.initial = true;
            and.subjects = [{valid:false}];
            expect(and.valid).toBe(false)
        });

    });

});

describe("multi same", function() {

    let and = new Or<Validatable[]>([], false);

    it("valids", () => {
        and.initial = false;
        and.subjects = [{valid:true}, {valid:true}];
        expect(and.valid).toBe(true)
    });

    it("invalids", () => {
        and.initial = true;
        and.subjects = [{valid:false}, {valid:false}];
        expect(and.valid).toBe(false)
    });
})


describe("multi mixed", function() {

    let and = new Or<Validatable[]>([], false);

    it("valids", () => {
        and.initial = true;
        and.subjects = [{valid:true}, {valid:false}];
        expect(and.valid).toBe(true)
    });

    it("invalids", () => {
        and.initial = false;
        and.subjects = [{valid:true}, {valid:false}];
        expect(and.valid).toBe(true)
    });
})
