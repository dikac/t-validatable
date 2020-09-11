import Validatable from "../../../dist/assert/string/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it('true invalid', ()=>{

    expect(Validatable(true, {}, 'value')).toBe(
        'value "Object" is compatible with Validatable type.'
    );

});

it('false valid', ()=>{

    expect(Validatable(false, {message:1}, 'value')).toBe(
        'value "Object" is not compatible with Validatable type.'
    );

});
