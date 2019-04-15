import {
    containsADigit,
    containsALowerLetter, containsANonWordCharacter,
    containsAnUpperLetter,
    isAString,
    isMoreThanEightCharactersLong,
    isValidPassword
} from './passwordValidator';

describe("Password Validator", () => {
    describe("A valid password (string, 8 long, lower an upper letters, digits and now-word characters)", () => {
        const validPassword = "12345678aA%";

        it("is valid", () => {
            expect(isValidPassword(validPassword)).toBeTruthy();
        });
    });

    describe("A password that is not a string", () => {
        const password = 12345678;

        it("is not valid", () => {
            expect(isValidPassword(password)).toBeFalsy();
        });
    });

    describe("A password that is less than 8 characters long", () => {
        const password = "aA4567%";

        it("is not valid", () => {
            expect(isValidPassword(password)).toBeFalsy();
        });
    });

    describe("A password that does not contain a lower letter (a-z)", () => {
        const password = "12345678A%";

        it("is not valid", () => {
            expect(isValidPassword(password)).toBeFalsy();
        });
    });

    describe("A password that does not contain an upper letter (A-Z)", () => {
        const password = "12345678a%";

        it("is not valid", () => {
            expect(isValidPassword(password)).toBeFalsy();
        });
    });

    describe("A password that does not contain a digit", () => {
        const password = "abcdABCD%";

        it("is not valid", () => {
            expect(isValidPassword(password)).toBeFalsy();
        });
    });

    describe("A password that does not contain non-word character", () => {
        const password = "12345678aA";

        it("is not valid", () => {
            expect(isValidPassword(password)).toBeFalsy();
        });
    });
});


// Possible parameterized tests for individual validators
describe("Is a string validator", () => {
    it.each
        `input    | result
        ${"abcd"} | ${true}
        ${"defg"} | ${true}
        ${1234}   | ${false}
        ${true}   | ${false}
    `(
        "validates the input $input as $result", ({input, result}) => {
            expect(isAString(input)).toBe(result);
        }
    );
});

describe("8 characters length validator", () => {
    it.each
        `input         | result
        ${"12345678"}  | ${true}
        ${"123456789"} | ${true}
        ${"123"}       | ${false}
        ${"1234567"}   | ${false}
    `(
        "validates the input $input as $result", ({input, result}) => {
            expect(isMoreThanEightCharactersLong(input)).toBe(result);
        }
    );
});

describe("Contains lower letter validator", () => {
    it.each
        `input  | result
        ${"a"}  | ${true}
        ${"ab"} | ${true}
        ${"aA"} | ${true}
        ${"Aa"} | ${true}
        ${"A"}  | ${false}
    `(
        "validates the input $input as $result", ({input, result}) => {
            expect(containsALowerLetter(input)).toBe(result);
        }
    );
});

describe("Contains upper letter validator", () => {
    it.each
        `input  | result
        ${"A"}  | ${true}
        ${"AB"} | ${true}
        ${"aA"} | ${true}
        ${"Aa"} | ${true}
        ${"a"}  | ${false}
    `(
        "validates the input $input as $result", ({input, result}) => {
            expect(containsAnUpperLetter(input)).toBe(result);
        }
    );
});

describe("Contains digit validator", () => {
    it.each
        `input  | result
        ${"1"}  | ${true}
        ${"12"} | ${true}
        ${"a1"} | ${true}
        ${"1a"} | ${true}
        ${"a"}  | ${false}
    `(
        "validates the input $input as $result", ({input, result}) => {
            expect(containsADigit(input)).toBe(result);
        }
    );
});

describe("Contains non word character validator", () => {
    it.each
        `input  | result
        ${"%"}  | ${true}
        ${"%$"} | ${true}
        ${"a$"} | ${true}
        ${"#a"} | ${true}
        ${"a"}  | ${false}
    `(
        "validates the input $input as $result", ({input, result}) => {
            expect(containsANonWordCharacter(input)).toBe(result);
        }
    );
});
