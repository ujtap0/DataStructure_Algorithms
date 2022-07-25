//helper function
//1. getDigit(num, place): return the digit in num at the given place value
function getDigit (num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}
//2. digitCount(num): returns the number of digits in num
function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
//3.mostDigits(nums): given an array of numbrs, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
  let maxDigits = 0;
  nums.forEach((num) => {
    maxDigits = Math.max(maxDigits, digitCount(num))
  })
  return maxDigits;
}

//pseudocode
//1. 배열에서 가장 큰 자릿수 찾기
//2. 가장 큰 자릿수 만큼 반복 돌리기
//3. 각 반복마다 0-9의 buket생성: one array including 10 sub array
//3-1. 자릿수에 해당하는 수에 상응하는 bucket에 숫자 넣어주기

function radixSort (nums) {
  let maxDigitCount = mostDigits(nums);
  for(let k=0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, (v) => []);
    nums.forEach((num) => {
      digitBuckets[getDigit(num, k)].push(num);
    })
    nums = [].concat(...digitBuckets);
  }
  return nums
}

console.log(radixSort([3222222, 33, 333, 3333]))