// 1. array implementation
// using push and pop in tandem on an array, create a stack
// ------------------ 코드 -------------------
// let stack = [];
// stack.push('google');
// stack.push('instagram');
// stack.push('youtube');

// stack.pop()
// stack.pop()
// stack.pop()

const stack = [];
stack.unshift("create new file");
stack.unshift("resized file");
stack.unshift("cloned out wrinkle");

//["cloned out wrinkle", "resized file", "create new file"]
// last thing in needs to come out first =>"cloned out wrinkle"이 제일 먼저 제거되야함 => shist() 사용

stack.shift()
stack.shift()
stack.shift()


// unshift-shift 비효율
// 배열에 첫 부분에 요소를 추가/제거 하는 것은 시간이 오래 걸리는 작업
// 배열의 맨 처음에 요소를 추가하면 index가 0이되고 배열의 모든 요소들도 index를 다시 설정해 줘야 함