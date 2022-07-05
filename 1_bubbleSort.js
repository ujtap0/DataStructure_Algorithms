//sorting animation
// https://www.toptal.com/developers/sorting-algorithms

//built-in js sort method => bubble sort

//swapping functionailty
//ES5
function swap (arr, idx1, idx2){
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
//ES2015
const swapSimple = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]

//pseudo-code
//1. start looping from with variable(i) the end of the array towards the beginning(배열의 끝에서 시작으로) => shrinking down the amount of space
//2. start inner loop with variable(j) from the beginning until i-1(시작부터 i-1까지)
//3. arr[j]가 arr[j+1]보다 크면 서로 swap
//4. return sorted array

function bubbleSort(arr) {
  let noSwaps;
  for(let i = arr.length ; i > 0 ; i--){
    noSwaps = true;
    for(let j=0 ; j < i-1; j++){
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

//optimization
// everytime at the beginning => noSwaps = true
// during iteration => noSwaps = false
// then if iteration is finished => noSwap = true = don't make swap

bubbleSort([37, 45, 29, 8])

//BIG O
//general : O(n^2)