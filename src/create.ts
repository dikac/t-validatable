import Validatable from "./validatable";

export default function Create<Valid extends boolean>(valid : Valid) : Validatable<Valid> {

    return {
        valid : valid
    };
}
