import isValidPassword from './passwordValidator';

describe("Password Validator", () => {
  describe("A valid password", () => {
  it("is a string", () => {
    const password = "hello";

      expect(isValidPassword(password)).toBeTruthy();
    });
  });
});