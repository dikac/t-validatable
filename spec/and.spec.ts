import And from "../dist/and";
import Validatable from "../dist/validatable";
import Guard from "../dist/guard/validatable";

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
            expect(initial === and.defaults).toBeTrue()
        });

        it("set", () => {
            let initial2 = false;
            and.defaults = initial2;
            expect(initial === and.defaults).toBeFalse();
            expect(initial2 === and.defaults).toBeTrue();
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
            and.defaults = true;
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            and.defaults = false;
            expect(and.valid).toBe(false)
        });

    });

});

describe("single", function() {

    describe('constructor', function () {

        it("true", () => {
            let and = new And<Validatable[]>([{valid:true}], false);
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            let and = new And<Validatable[]>([{valid:false}], true);
            expect(and.valid).toBe(false)
        });
    });

    describe('set', function () {

        let and = new And<Validatable[]>([], true);

        it("true", () => {
            and.defaults = false;
            and.subjects = [{valid:true}];
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            and.defaults = true;
            and.subjects = [{valid:false}];
            expect(and.valid).toBe(false)
        });

    });

});

describe("multi same", function() {

    let and = new And<Validatable[]>([], false);

    it("valids", () => {
        and.defaults = false;
        and.subjects = [{valid:true}, {valid:true}];
        expect(and.valid).toBe(true)
    });

    it("invalids", () => {
        and.defaults = true;
        and.subjects = [{valid:false}, {valid:false}];
        expect(and.valid).toBe(false)
    });

    it('iterator', ()=>{

        let number = 0;

        for(let value of and) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    })
})


describe("multi mixed", function() {

    let and = new And<Validatable[]>([], false);

    it("valids", () => {
        and.defaults = true;
        and.subjects = [{valid:true}, {valid:false}];
        expect(and.valid).toBe(false)
    });

    it("invalids", () => {
        and.defaults = false;
        and.subjects = [{valid:true}, {valid:false}];
        expect(and.valid).toBe(false)
    });

    it('iterator', ()=>{

        let number = 0;

        for(let value of and) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    })
})
