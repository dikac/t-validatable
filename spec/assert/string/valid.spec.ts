import Valid from "../../../dist/assert/string/valid";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it('true invalid', ()=>{

    expect(Valid({valid:true})).toBe(
        'Object is valid.'
    );

});

it('false valid', ()=>{

    expect(Valid({valid:false})).toBe(
        'Object is not valid.'
    );

});
