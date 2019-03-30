# Password validator kata

You have to implement a password validation method.
This method receives a password and returns `true` or `false` depending on whether the password is valid or not.

The signature of this method could be as follows:

```javascript
function isValidPassword (password: string) : boolean {
  ...
}
```

A password is considered valid if it fulfills all of the following rules:

1. The `password` parameter must be a string, i.e. numbers are not valid passwords
2. It must be at least 8 characters long
3. It must contain at least one letter (a-z)
4. It must contain at least one uppercase letter (A-Z)
5. It must contain at least one number (0-9)
6. It must contain at least one non-word character (not a letter nor a number), e.g. *, !, &, %, $

## Note
- You must implement the rules step by step
- Following TDD principles
- And doing ping-pong pair programming with your partner

## Some help:
- https://regex101.com/