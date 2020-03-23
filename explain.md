let a = 7;

let b = 0;

for (let i = 7; i > a; i++) {

  b += 1;

  console.log(b)

}

This file shows error as :

1) The initial value is same as the given value to 'a' .
2) 'console.log(b)' is given inside the loop. It should be set outside the loop.
