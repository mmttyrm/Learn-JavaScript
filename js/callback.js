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

var courses = [
    'JavarScript',
    'PHP',
    'Ruby'
];

// var htmls = courses.map2(function (course, index,){
//     return `<h1>${course}</h1>`
// })
// console.log(htmls.join(''));


// courses.forEach2(function(course, index, array){
//     console.log(course, index, array)
// })


Array.prototype.reduce2 = function(callback,initialValue){
    var arrayLength = this.length;
    var i = 0
    if (arguments.length < 2) {
        i = 1;
        initialValue = this[0]
    }
    for( ; i < arrayLength ; i++ ){
        initialValue = callback(initialValue,this[i],i,this)
    }
    return initialValue;
}
var courses2 = [
    {
        id: 1,
        name: 'php',        
        coin: 100
    },
    {
        id: 2,
        name: 'C#',        
        coin: 100
    },
    {
        id: 3,
        name: 'Java',        
        coin: 100
    },
    {
        id: 4,
        name: 'javaScript',        
        coin: 100
    }
]


var totalCoin = courses2.reduce2(function(accumulator, currentValue, currentIndex, originArray){
    return accumulator + currentValue.coin
})
console.log(totalCoin)