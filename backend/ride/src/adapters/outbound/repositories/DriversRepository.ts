import {IDataBase} from "../../../interfaces";

export default class DriversRepository {
    constructor(readonly db: IDataBase) {
    }

    async create(id: string, name: string, email: string, document: string, car_plate: string): Promise<string> {
        try {
            const insertQuery = `INSERT INTO drivers (id, name, email, document, car_plate) VALUES (?, ?, ?, ?, ?)`;
            await this.db.query(insertQuery, [id, name, email, document, car_plate]);
            return id;
        } catch (e) {
            console.log("Error creating driver", e)
            throw new Error("Error creating driver");
        }

    }

}