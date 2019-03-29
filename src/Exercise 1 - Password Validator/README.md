# Password validator kata

You have to implement a password validation method.

The signature of this method could be as follows:

```javascript
function passwordValidator (password) {
  ...
}
```

This method must fulfill the following rules:

1. The `password` parameter must be a string
2. A valid password must be at least 8 characters long
3. A valid password must contain at least one letter (a-z)
4. A valid password must contain at least one uppercase letter (A-Z)
5. A valid password must contain at least one number (0-9)
6. A valid password must contain at least one non-word character (not a letter nor a number), e.g. *, !, &, %, $

## Note
- You must implement the rules step by step
- Following TDD principles
- And doing ping-pong pair programming with your partner

## Some help:
- https://regex101.com/