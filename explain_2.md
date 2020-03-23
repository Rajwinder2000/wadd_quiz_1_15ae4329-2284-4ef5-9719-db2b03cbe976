c const letters = ['a', 'b', 'g', 'k'];

for (let l of letter) {

  console.log(l)

}
 
 The file shows error beacuse  in the first line  array is  declared as "letters" and after that when the name is changed to "l" 
 the given word is "letter" 
 
 If it is written as:
  const letters = ['a', 'b', 'g', 'k'];

for (let l of letter) {

  console.log(l)

}
it will display 
"a"
"b"
"g"
"k"
in sequence.
