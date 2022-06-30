// LeanearSearch보다 빠르다
// rather than eliminating one el ar a time, you can eliminate half of the remaining els at a time
// 정렬된 배열에서 쓸 수 있다

//pseudo-code
//1. 정렬된 배열과 값을 인자로 받는다
//2. 두 변수를 선언한다=> left pointer(start of the array) right pointer(end of the array)
//3. keep looping until left pointer comes before the right pointer
//   create pointer in the middle
//   찾으면 idnex 반환
//   middle보다 값이 크면 left pointer를 middle 다음으로 올린다
//   middle보다 작으면 right pointer middle아래로 잡는다
// value를 찾지를 못하면 return -1

function binarySearch(arr, el){
  let left = 0;
  let right = arr.length-1;
  let mid = Math.floor((right+left)/2);
  while(left < right){
    if(el < arr[mid]) right = mid - 1;
    if(el > arr[mid]) left = mid + 1;
    if(el === arr[mid]) return mid
    mid = Math.floor((right+left)/2);
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,10,29,39,42,73], 100));