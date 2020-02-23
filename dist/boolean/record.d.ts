import Validatable from "../validatable";
import Record from "@dikac/t-object/record/record";
export default function Record(record: any): record is Record<Validatable>;
