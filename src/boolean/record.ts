import Validatable from "../validatable";
import Record from "@dikac/t-object/record/record";
import TypeRecord from "@dikac/t-object/boolean/record";
import Type from "./type";

export default function Record(record : any) : record is Record<Validatable> {

    return TypeRecord(record, Type)
}
