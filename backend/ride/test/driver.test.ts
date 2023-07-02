import {IUUID} from "../src/interfaces";
import Driver from "../src/core/use_cases/Driver";

describe('Driver Suits', function () {
    let uuidMock: IUUID
    beforeEach(() => {
        uuidMock = {
            NewUUID: () => "123"
        }
    })

    test('Should create a driver', function () {
        const input = {
            name: "John Doe",
            email: "email.com",
            car_plate: "ABC-1234",
            document: "123.456.789-09"
        }

        const driver = new Driver(input.name, input.email, input.document, input.car_plate, uuidMock)

        expect(driver.create()).toBe("123")

    });

    test('Should throw document invalid error', function () {
        const input = {
            name: "John Doe",
            email: "email.com",
            car_plate: "ABC-1234",
            document: "123.456.789-00"
        }

        expect(() => new Driver(input.name, input.email, input.document, input.car_plate, uuidMock)).toThrowError("Invalid document")

    });
});