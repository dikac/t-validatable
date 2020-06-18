import  Validatable from './validatable';

/**
 * build valid {@link Validatable}
 */

export default function Valid () : Validatable<true> {

    return {valid : true}
}
