//2개의 배열을 받아서 정렬해서 하나의 배열로 합치기
function merge(arr1 ,arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    }else{
      results.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    results.push(arr1[i]);
    i++
  }
  while(j < arr2.length){
    results.push(arr2[j]);
    j++
  }
  return results;
}

//sort Peuedocode
//1. 배열을 length가 1/0이 될 때 까지 새끼 배열로 쪼개기
//2. merge를 계속 호출해서 새끼배열을 정렬해서 합치기 

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right)
}

//mergeSort([10, 80, 73, 76, 1, 7])
//arr = [10, 73, 24, 76, 1, 7]
//mid = 3

// arr = [10, 73, 24]
// mid = 1

// arr = [10] return
// left = [10]

// arr = [10, 80, 73]
// left = [10]
// mid = 1 

// arr = [80, 73]
// left = [10]
// mid = 1 