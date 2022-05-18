// function myFunction(param){
//     param(123);
// }

// function myCallback(value){
//     console.log('value:' + value)
// }
// myFunction(myCallback);

// callback phan 2

// 1. Là 1 hàm
// 2. Truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

var courses = [
    'JavarScript',
    'PHP',
    'Ruby'
];

courses.map(function(course){
    console.log(course)
})