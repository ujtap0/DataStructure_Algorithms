//찾는 요소를 주어진 배열의 모든 요소와 비교함
//js method => indexOf, includes, find, findIndex
//they're checking every el, one at a time to check if whatever we pass in
//starting at the beginning, moving forward

//pseudo-code
//1. 함수는 array와 value를 받는다
//2. 반복문을 돌면서 value와 배열의 현재 요소가 일치하는지 확인한다
//3. 만약 있다면 index를 반환/ 없으면 -1을 반환
function linearSearch(arr, el){
  for(let i=0; i<arr.length; i++){
    if(arr[i] === el) return i
  }
  return -1
}
console.log(linearSearch([1,2,3,4,5], 2))

//BIG O
//Best: O(1)
//Average: O(n)
//worst: O(n)