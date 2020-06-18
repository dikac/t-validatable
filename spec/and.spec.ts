import And from "../dist/and";
import Valid from "../dist/valid";
import Validatable from "../dist/validatable";
import Invalid from "../dist/invalid";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('structure', function () {

    describe('subjects', function () {

        let subjects = [];
        let and = new And<Validatable[]>(subjects, true);

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
        let and = new And<Validatable[]>([], initial);

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
            let and = new And<Validatable[]>([], true);
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            let and = new And<Validatable[]>([], false);
            expect(and.valid).toBe(false)
        });

    });

    describe('set', function () {

        let and = new And<Validatable[]>([], true);

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
            let and = new And<Validatable[]>([Valid()], false);
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            let and = new And<Validatable[]>([Invalid()], true);
            expect(and.valid).toBe(false)
        });
    });

    describe('set', function () {

        let and = new And<Validatable[]>([], true);

        it("true", () => {
            and.initial = false;
            and.subjects = [Valid()];
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            and.initial = true;
            and.subjects = [Invalid()];
            expect(and.valid).toBe(false)
        });

    });

});

describe("multi same", function() {

    let and = new And<Validatable[]>([], false);

    it("valids", () => {
        and.initial = false;
        and.subjects = [Valid(), Valid()];
        expect(and.valid).toBe(true)
    });

    it("invalids", () => {
        and.initial = true;
        and.subjects = [Invalid(), Invalid()];
        expect(and.valid).toBe(false)
    });
})


describe("multi mixed", function() {

    let and = new And<Validatable[]>([], false);

    it("valids", () => {
        and.initial = true;
        and.subjects = [Valid(), Invalid()];
        expect(and.valid).toBe(false)
    });

    it("invalids", () => {
        and.initial = false;
        and.subjects = [Valid(), Invalid()];
        expect(and.valid).toBe(false)
    });
})
