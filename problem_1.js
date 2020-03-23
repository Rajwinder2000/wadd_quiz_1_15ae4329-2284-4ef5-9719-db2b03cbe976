const Palidrome="racecar";
const notPalidrome="abc";
{
  if (Palidrome == Palidrome.split('').reverse( ).join(''))
  {
    alert(Palidrome+' is palidrome.');
  }
  else{
    alert(Palidrome+' is not palidrome');
    
  }
  
}
