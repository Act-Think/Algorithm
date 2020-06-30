c=0;
(require('fs').readFileSync('/dev/stdin','utf8')+'').match(/[^\r\n]+/g).slice(1)[0].split(' ').forEach(n=>
    {for(i=2;i<=Math.sqrt(n);i++)if(n%i===0)return;if(n>1)c+=1});
    console.log(c)

// choijunseo

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

input = input.map(function(v) { 
  return v.split(' ')
          .map(function(v) { 
    return parseInt(v); 
  }); 
});

var count = 0;

input.map(function (nums) {
  nums.forEach(function(num) {
    count += prime(num);
  });
})

console.log(count);


function prime(num) {
  if (num === 1) return 0; 
  
  for (var i = 2; i <= num/2; i++) {
    if (num % i === 0) {
      return 0;
    }
  }
  return 1;

  // wnsqja8744


  var arr = require("fs").readFileSync("/dev/stdin").toString().split('\n');
  var count = parseInt(arr.shift());
  
  
  function test(arr, count) {
      var sum = 0;
      var list = new Array(1001);
  
      for (var i = 0; i < count; i++) {
          var num = list[arr[i]];
          if (num === true) {
              sum++;
          } else if (num === false) {
              continue;
          } else {
              if (find(arr[i])) {
                  list[arr[i]] = true;
                  sum++;
                  continue;
              } else {
                  list[arr[i]] = false;
                  continue;
              }
          }
      }
      console.log(sum);
  }
  
  function find(num) {
      if (num === 1) return false;
      var i = 2;
      var root = Math.sqrt(num);
      while (i <= root) {
          if (num % i === 0) return false
          i++;
      }
      return true
  }
  arr = arr[0].split(' ');
  arr = arr.map((item) => parseInt(item));
  test(arr, count);
  
// 	dlxotjssla