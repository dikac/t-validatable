import  Validatable from './validatable';

/**
 * build invalid {@link Validatable}
 */

export default function Invalid () : Validatable {

    return {valid : false}
};
