let a = 10;
let b = 5;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b);
console.log((a += b), (a -= b), (a *= b), (a /= b), (a %= b));
console.log((a = b), a > b, a < b, a >= b, a <= b, a == b);
console.log(a & b, a | b, a ^ b, a << b, a >> b, ~a, a);
console.log(a < 10 && b > 0, a < 10 || b > 0, !(a < b));
console.log(a > b ? a : b + 5, b);
