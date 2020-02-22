import Validatable from "../validatable";


export default interface Record<V extends Validatable = Validatable> extends globalThis.Record<string|number, Record<V>|V> {

}
