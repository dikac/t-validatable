import Validatable from "../../../validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
export default function Valid(object: Validatable & Value, throwable?: Function<[string], Error>): Error;
