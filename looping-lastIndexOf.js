function lastIndexOf(theArray, theValue)
{
  // let searching = true;
  let i = theArray.length - 1;
  while (i >= 0)
  {
    if (theArray[i] === theValue)
    {
      return i;
    }
    i--;
  }
  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);