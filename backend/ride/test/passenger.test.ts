import {IDataBase, IUUID} from "../src/interfaces";
import Passenger from "../src/core/use_cases/Passenger";

describe('Passenger Suits', function () {
    let uuidMock: IUUID
    let databaseMock: IDataBase
    beforeEach(() => {
        uuidMock = {
            NewUUID: () => "123"
        }
        databaseMock = {
            connect: () => {
            },
            disconnect: () => {
            },
        }
    })

    test('Should create a passenger', function () {
        const input = {
            name: "John Doe",
            email: "email.com",
            document: "123.456.789-09"
        }

        const passenger = new Passenger(input.name, input.email, input.document, databaseMock, uuidMock)

        expect(passenger.create()).toBe("123")

    });

    test('Should throw document invalid error', function () {
        const input = {
            name: "John Doe",
            email: "email.com",
            document: "123.456.789-00"
        }

        expect(() => new Passenger(input.name, input.email, input.document, databaseMock, uuidMock)).toThrowError("Invalid document")

    });
});