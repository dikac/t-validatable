import Validatable from "./validatable";

/**
 * @deprecated
 */
export default function Create<Valid extends boolean>(valid : Valid) : Validatable<Valid> {

    return {
        valid : valid
    };
}
