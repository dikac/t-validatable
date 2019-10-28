import  Validatable from './validatable';

export default class Standard implements  Validatable  {

    constructor(
        public valid : boolean = false
    ) {


    }
}