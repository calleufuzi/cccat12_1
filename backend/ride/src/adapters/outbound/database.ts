// @ts-nocheck
import mysql from 'mysql2';

export default class Database {
    connection: mysql.Connection;

    constructor(host: string, user: string, password: string, database: string) {
        this.connection = mysql.createConnection({host, user, password, database})
        this.connect()
    }

    private connect() {
        this.connection.connect((err: Error) => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected in database as id ' + this.connection.threadId);
        })
    }

    public disconnect() {
        this.connection.end()
    }

    public async query(query: string, params: any): Promise<any> {
        try {
            return await this.connection.execute(query, params)
        } catch (e) {
            console.log(e)
            throw new Error("Error executing query")
        }
    }
}