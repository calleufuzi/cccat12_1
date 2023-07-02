import {IDataBase, IDriverRepository, IPassengerRepository, IUUID} from "../../interfaces";
import Customer from "./Customer";
import DriversRepository from "../../adapters/outbound/repositories/DriversRepository";


export default class Driver extends Customer {
    repository: IDriverRepository

    constructor(
        readonly name: string,
        readonly email: string,
        readonly document: string,
        readonly car_plate: string,
        db: IDataBase,
        uuid: IUUID,
    ) {
        super(name, email, document, uuid)
        this.repository = new DriversRepository(db)
    }

    public create() {
        const formattedDocument = this.getFormattedDocument()
        return this.repository.create(this.id, this.name, this.email, formattedDocument, this.car_plate)
    }
}