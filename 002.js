```
데이터
var arr = [200, 100, 300];
//pass
console.log(arr);

출력
[200, 100, 10000, 300]
```

var arr = [200, 100, 300];
arr.splice(2, 0, 10000)

console.log(arr);