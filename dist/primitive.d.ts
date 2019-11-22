import Validatable from './validatable';
export default class Primitive implements Validatable {
    boolean: boolean;
    constructor(boolean: boolean);
    get valid(): boolean;
}
