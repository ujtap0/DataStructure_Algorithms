const q = [];

q.push("First");
q.push("Second");
q.push("Third");

q.shift();
q.shift();
q.shift();

q.unshift("First");
q.unshift("Second");
q.unshift("Third");

q.pop()
q.pop()
q.pop()

//queue를 배욜로 구현 할 떄는 shift나 unshift를 할 때 re-indexing이 일어나서 시간이 많이 걸린다