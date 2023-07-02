export interface IUUID {
    NewUUID(): string
}

export interface IDataBase {
    query(query: string, params: any): Promise<any>

    disconnect(): void

    connect(): void
}

export interface IPassengerRepository {
    create(id: string, name: string, email: string, document: string): Promise<string>
}

export interface IDriverRepository {
    create(id: string, name: string, email: string, document: string, car_plate: string): Promise<string>
}

