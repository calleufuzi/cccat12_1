// @ts-nocheck
import Passenger from "../../../core/use_cases/Passenger";
import {IDataBase, IUUID} from "../../../interfaces";
import Driver from "../../../core/use_cases/Driver";

export default class DriverHandler {

    constructor(readonly db: IDataBase, readonly uuidAdapter: IUUID) {
    }

    async Create(req, res) {
        try {
            const {name, email, document, car_plate} = req.body;
            const driver = new Driver(name, email, document, car_plate, this.db, this.uuidAdapter);
            const driverId = await driver.create();
            res.json({driver_id: driverId});
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
}