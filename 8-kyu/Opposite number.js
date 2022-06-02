// Very simple, given an integer or a floating-point number, find its opposite.

const opposite = number => Math.sign(number) === 1 ? -number : Math.abs(number)