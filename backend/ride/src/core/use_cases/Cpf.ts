// @ts-nocheck

export default class CPF {
    sanitizedCpf = "";

    constructor(input) {
        this.cpf = input;
    }

    hasSequentiallyRepeatedDigits() {
        const [firstDigit] = this.sanitizedCpf;
        return this.sanitizedCpf.split('').every(digit => digit === firstDigit);
    }

    hasValidLength() {
        const CPF_MAX_LENGTH = 14;
        const CPF_MIN_LENGTH = 11;
        const CPFLength = this.cpf.length;
        return CPFLength >= CPF_MIN_LENGTH && CPFLength <= CPF_MAX_LENGTH;
    }

    getVerifierDigit(digitSum) {
        const CPFLength = 11;
        const restOfDivision = digitSum % CPFLength;
        return restOfDivision < 2 ? 0 : CPFLength - restOfDivision;
    }

    sanitize() {
        return this.cpf.replace(/\D/g, "");
    }

    getDigitToVerify() {
        const lastVerifiersPositions = 2;
        const cpfLength = this.cpf.length;
        return this.cpf.substring(cpfLength - lastVerifiersPositions, cpfLength);
    }

    calculateDigitSum() {
        const CPF_VERIFIER_FIRST_DIGIT_POSITION = 11;
        const CPF_VERIFIER_SECOND_DIGIT_POSITION = 12;
        const sanitizedCpfLength = this.sanitizedCpf.length;
        let firstDigitSum = 0;
        let secondDigitSum = 0;

        for (let digitPosition = 1; digitPosition < sanitizedCpfLength - 1; digitPosition++) {
            const currentDigit = parseInt(this.sanitizedCpf.substring(digitPosition - 1, digitPosition));
            firstDigitSum += (CPF_VERIFIER_FIRST_DIGIT_POSITION - digitPosition) * currentDigit;
            secondDigitSum += (CPF_VERIFIER_SECOND_DIGIT_POSITION - digitPosition) * currentDigit;
        }
        return [firstDigitSum, secondDigitSum];
    }

    getCpt() {
        return this.sanitizedCpf;
    }

    validate() {
        if (!this.cpf) return false;
        if (!this.hasValidLength()) return false;

        this.sanitizedCpf = this.sanitize();
        if (this.hasSequentiallyRepeatedDigits()) return false;

        try {
            let [firstDigitSum, secondDigitSum] = this.calculateDigitSum();
            const firstVerifierDigit = this.getVerifierDigit(firstDigitSum);
            secondDigitSum += 2 * firstVerifierDigit;
            const secondVerifierDigit = this.getVerifierDigit(secondDigitSum);
            const CpfDigitToVerify = this.getDigitToVerify();
            const CpfDigitValidator = `${firstVerifierDigit}${secondVerifierDigit}`;
            return CpfDigitToVerify == CpfDigitValidator;
        } catch (e) {
            console.error("Erro !" + e);
            return false;
        }
    }

}