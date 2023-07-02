import {IDataBase, IPassengerRepository, IUUID} from "../../interfaces";
import Customer from "./Customer";
import PassengerRepository from "../../adapters/outbound/repositories/PassengerRepository";


export default class Passenger extends Customer {
    repository: IPassengerRepository

    constructor(
        readonly name: string,
        readonly email: string,
        readonly document: string,
        db: IDataBase,
        uuid: IUUID,
    ) {
        super(name, email, document, uuid)
        this.repository = new PassengerRepository(db)
    }

    public async create() {
        const formattedDocument = this.getFormattedDocument()
        return this.repository.create(this.id, this.name, this.email, formattedDocument)
    }
}