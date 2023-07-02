import CPF from "./Cpf";
import {IUUID} from "../../interfaces";

export default class Customer {
    private cpf: CPF
    protected readonly id: string

    constructor(
        readonly name: string,
        readonly email: string,
        readonly document: string,
        uuid: IUUID,
    ) {
        this.cpf = new CPF(document)
        if (!this.cpf.validate()) throw new Error("Invalid document")

        this.id = uuid.NewUUID()
    }

    getFormattedDocument(): string {
        return this.cpf.getCpt()
    }


}