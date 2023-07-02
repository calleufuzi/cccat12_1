// @ts-nocheck
import Passenger from "../../../core/use_cases/Passenger";
import {IDataBase, IUUID} from "../../../interfaces";

export default class PassengerHandler {

    constructor(readonly db: IDataBase, readonly uuidAdapter: IUUID) {
    }

    async Create(req, res) {
        try {
            const {name, email, document} = req.body;
            const passenger = new Passenger(name, email, document, this.db, this.uuidAdapter);
            const passengerId = await passenger.create();
            res.json({passenger_id: passengerId});
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
}