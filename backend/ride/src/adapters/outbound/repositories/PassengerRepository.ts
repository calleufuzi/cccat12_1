import {IDataBase} from "../../../interfaces";

export default class PassengerRepository {
    constructor(readonly db: IDataBase) {
    }

    async create(id: string, name: string, email: string, document: string): Promise<string> {
        try {
            const insertQuery = `INSERT INTO passenger (id, name, email, document) VALUES (?, ?, ?, ?)`;
            await this.db.query(insertQuery, [id, name, email, document]);
            return id;
        } catch (e) {
            console.log("Error creating passenger", e)
            throw new Error("Error creating passenger");
        }

    }

}