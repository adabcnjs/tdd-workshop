import passwordValidator from './solution'

describe("The password validator verifies that a valid password", () => {
  it("is a string", () => {
    const password = "hello"
    expect(passwordValidator(password)).toBeTruthy()
  })
})