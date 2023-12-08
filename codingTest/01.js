//! Q1.
// 1에서부터 100까지의 합을 구하세요. 단, 3배수의 합 만을 구하는 방법을 기술하세요.
let sum = 0;
for (let i = 0; i <= 100; i += 3) {
  sum += i;
}
console.log(sum);

//! Q2. 
// str 변수에 담긴 문자열의 내용 중 빨간색의 문자열만 취하는 방법을 기술하세요.
// >> 빨간색 문자열: '2022년 08월 20일'
const str = "오늘은 2022년 08월 20일 입니다."
console.log(str.slice(4, -5));

//! Q3. 
// 오늘은 2022년 8월 20일 입니다. 오늘에 해당되는 분기를 구하는 방법을 기술하세요.
function getQuarter(month) {
  return `${Math.ceil(month / 3)}분기 입니다.`;
}
const date = new Date(2022, 7, 20);
console.log(getQuarter(date.getMonth()));

//! Q4. 
// arr 배열을 오름차순으로 정렬하는 방법을 기술하세요. 단, 연산자(if, for) 만 사용하여 문제를 해결하세요.
const arr = [8, 9, 4, 3, 5, 2];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  console.log(arr);
}
console.log(arr);

console.log('------');
//! Q5. 
// 두 개의 배열을 하나의 배열로 만들고, 중복되는 값을 제거하는 방법을 기술하세요.
const arr1 = [3, 4, 5];
const arr2 = [9, 6, 4, 2];
const combinedArr = [...arr1, ...arr2];
const uniqueArr = [...new Set(combinedArr)];
console.log(uniqueArr);

const combinedArr2 = [...arr1, ...arr2];
console.log(
  combinedArr2.filter(
    (v, i, arr) => arr.indexOf(v) === i
  )
);
