import Type from "../../type/type";
import Property from "@dikac/t-object/property/property";
export default function Property<P extends string | number>(data: Type & Property<P>): string;
