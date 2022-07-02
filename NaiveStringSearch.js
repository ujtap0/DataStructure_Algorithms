//pseudo-code
//loop over the longer string
//loop over the shorter string
//if the characters don't match, break out of the inner loop
//if the characters do match, keep going
//if you complete the inner loop and find a match, increment the count of matches
//return the count

function naiveSearch(long, short){
  for(let i=0; i<long.length; i++){
    for(letj=0; i<short.length; j++){
      if (short[j] !== long[i+j]) break;
      if(j === short.length - 1) count++
    }
  }
  return count;
}

naiveSearch('lorie loled', 'lol')