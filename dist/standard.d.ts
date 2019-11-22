import Validatable from './validatable';
export default class Standard implements Validatable {
    valid: boolean;
    constructor(valid?: boolean);
}
