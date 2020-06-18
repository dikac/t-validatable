export default function Type(value: any) : Error {

    return new Error(`type expect compatible with Validatable, given ${value}`)
}
