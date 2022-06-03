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

// Array.prototype.map2 = function(callback){
//     var output = [], arrayLength = this.length;
//     for (var i=0; i<arrayLength; i++){
//        var result = callback(this[i], i);
//        output.push(result);
//     };

//     return output;
// };

// Array.prototype.forEach2 = function(callback){
//     var arrayLength = this.length;
//     for(var i = 0; i < arrayLength; i++){
//         var result = callback(this[i], i, this);
//     }
// }

// var courses = [
//     'JavarScript',
//     'PHP',
//     'Ruby'
// ];

// var htmls = courses.map2(function (course, index,){
//     return `<h1>${course}</h1>`
// })
// console.log(htmls.join(''));


// courses.forEach2(function(course, index, array){
//     console.log(course, index, array)
// })

// reduce
// Array.prototype.reduce2 = function(callback,initialValue){
//     var arrayLength = this.length;
//     var i = 0
//     if (arguments.length < 2) {
//         i = 1;
//         initialValue = this[0]
//     }
//     for( ; i < arrayLength ; i++ ){
//         initialValue = callback(initialValue,this[i],i,this)
//     }
//     return initialValue;
// }
// var courses2 = [
//     {
//         id: 1,
//         name: 'php',        
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'C#',        
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Java',        
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'javaScript',        
//         coin: 300
//     }
// ]
// var totalCoin = courses2.reduce2(function(accumulator, currentValue, currentIndex, originArray){
//     return accumulator + currentValue.coin
// })
// console.log(totalCoin)

// filter

// Array.prototype.filter2 = function (callback,thisArg){
//     var output = [];
//     for (var index in this){
//        if (this.hasOwnProperty(index)){
           
//           var result = callback(this[index],index,this);
//           if(result){
//               output.push(this[index])
//           }
//        }
//     }
    
//     return output
// }
// var freeCourses = courses2.filter2(function(course){
//     return course.coin == 100;
// }) 
// console.log(freeCourses);


// CLASSES
// - Thay thế cho contructor function
// - Giúp dễ nhìn hơn.

class Course {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
}

const phpCourse = new Course('php', 1000);
const jsCourse = new Course('JavaScript', 2000);
console.log(phpCourse.getName());
console.log(jsCourse.getPrice());