import CPF from "../src/core/use_cases/Cpf";

describe('CPT Suits', function () {
    test("Deve voltar false se o CPF for null", () => {
        const input = null
        const sut = new CPF(input)
        const output = sut.validate()
        expect(output).toBeFalsy()
    })

    test("O CPF deve ser válido", () => {
        const input = "123.456.789-09"
        const sut = new CPF(input)
        const output = sut.validate()
        expect(output).toBeTruthy()
    })

    test("Deve voltar false se o CPF for menor do que 11 dígitos", () => {
        const input = "123.456.789-0"
        const sut = new CPF(input)
        const output = sut.validate()
        expect(output).toBeFalsy()
    })

    test("Deve voltar false se o CPF for maior do que 14 dígitos", () => {
        const input = "123.456.789-000-000"
        const sut = new CPF(input)
        const output = sut.validate()
        expect(output).toBeFalsy()
    })

    test("Deve voltar false se o CPF for todo igual", () => {
        const input = "111.111.111-11"
        const sut = new CPF(input)
        const output = sut.validate()
        expect(output).toBeFalsy()
    })
});
