import  Validatable from './validatable';

/**
 * create {@link Validatable} from {@param valid}
 */
export default function Standard<
    Boolean extends boolean = boolean
> (
    valid : Boolean
) : Validatable<Boolean> {

    return {valid : valid}
}


