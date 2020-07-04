// 다리를 지나는 트럭
/*
트럭 여러대
일차선 다리
정해진 순서

return: 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는가
bridge_length: 다리 길이
weight: 다리가 견딜 수 있는 무게
 ※ 트럭이 다리에 완전히 오르지 않은 경우,
  이 트럭의 무게는 고려하지 않습니다.

*/

'use strict'

// function solution(bridge_length, weight, truck_weights) {
//     var weight_sum = 0;
//     var time_sum = 0;
//     while (true) {
//         weight_sum += truck_weights[0];
//         if (weight_sum > weight) { // 중량 초과
//             time_sum += bridge_length;
//             weight_sum = 0;            
//         } else {
//             truck_weights.shift(); // 중량 같거나 작음
//             time_sum += 1;
//         }
//         if (truck_weights.length == 0) {
//             if (weight_sum == 0) {
//                 return time_sum + 1;
//             } else {
//                 return time_sum + bridge_length + 1;
//             }
//     }
// }
// }


// while (true) {
//     weight_sum += truck_weights[0];
//     if (weight_sum > weight) { // 중량 초과
//         time_sum += bridge_length;
//         weight_sum = 0;            
//     } else {
//         if (check) {
//             check == false
//         } else {
//             time_sum += 1;
//         }
//         truck_weights.shift(); // 중량 같거나 작음
        
//     }
//     if (truck_weights.length == 0) {
//         if (weight_sum == 0) {
//             return time_sum + 1;
//         } else {
//             return time_sum + bridge_length + 1;
//         }
// }
// }
// }

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  fruits = fruits.slice(1);
console.log(fruits);