import Type from "../../type/type";
import Parameter from "@dikac/t-function/parameter/parameter";
import Value from "@dikac/t-value/value";
/**
 * create string message suitable for function argument, including value
 * @param data
 */
export default function ArgumentGiven(data: Type & Parameter & Value<string>): string;
