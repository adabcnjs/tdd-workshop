export const isValidPassword = (password) => {
    return isAString(password)
        && isMoreThanEightCharactersLong(password)
        && containsALowerLetter(password)
        && containsAnUpperLetter(password)
        && containsADigit(password)
        && containsANonWordCharacter(password);
};

export const isAString = (password) => {
    return typeof(password) == "string";
};

export const isMoreThanEightCharactersLong = (password) => {
    return password.length >= 8;
};

export const containsALowerLetter = (password) => {
    return password.match("[a-z]+") != null;
};

export const containsAnUpperLetter = (password) => {
    return password.match("[A-Z]+") != null;
};

export const containsADigit = (password) => {
    return password.match("\\d+") != null;
};

export const containsANonWordCharacter = (password) => {
    return password.match("\\W+") != null;
};