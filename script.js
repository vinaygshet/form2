/* write functions for the following:-
1.Print odd numbers in an array
2.Convert all the strings to title caps in a string array
3.Sum of all numbers in an array
4.Return all the prime numbers in an array
5.Return all the palindromes in an array
6.Return median of two sorted arrays of same size
7.Remove duplicates from an array
8.Rotate an array by k times
*/

//Print odd numbers in an array

const odd=function(arr){
  var temp=[]
for(var i=0;i<arr.length;i++){
  if(arr[i]%2!==0){

      temp.push(arr[i])
      
  }
  
}
return temp;
}

console.log(odd([1,2,3,4,5,6,7]))

//IIFE

console.log((function(arr){
  var temp=[];
for(var i=0;i<arr.length;i++){
  if(arr[i]%2!==0){

      temp.push(arr[i])
      
  }
  
}
return temp;
})([1,2,3,4,5,6,7]))
//arrow function


const odd3=(arr)=>{
  var temp=[]
for(var i=0;i<arr.length;i++){
  if(arr[i]%2!==0){

      temp.push(arr[i])
      
  }
  
}
return temp;
}

console.log(odd3([1,2,3,4,5,6,7]))



//Convert all the strings to title caps in a string array
const caps=function(arr){
  var temp=[]
for(var i=0;i<arr.length;i++){
 var  a=arr[i].toUpperCase()

      temp.push(a)
      
  
  
}
return temp;
}


console.log(caps(["apra","cap","rock"]))

//IIFE
console.log((function(arr){
  var temp=[]
  for(var i=0;i<arr.length;i++){
     var  a=arr[i].toUpperCase()
  
          temp.push(a)
          
      
      
  }
  return temp;
  
})(["apra","cap","rock"]))

//arrow function

const caps3=(arr)=>{
  var temp=[]
for(var i=0;i<arr.length;i++){
 var  a=arr[i].toUpperCase()

      temp.push(a)
      
  
  
}
return temp;
}


console.log(caps3(["apra","cap","rock"]))

//Sum of all numbers in an array


const sum=function(arr){
  var count=0;
  for(var i=0;i<arr.length;i++){
      count=count+arr[i]
  }
  return count
}
console.log(sum([2,1,3]))
//IIFE


console.log((function(arr){
  var count=0;
  for(var i=0;i<arr.length;i++){
      count=count+arr[i]
  }
  return count;
})([1,2,3,4]))


//arrow function

const sum3=(arr)=>{
  var count=0;
  for(var i=0;i<arr.length;i++){
      count=count+arr[i]
  }
  return count
}
console.log(sum3([2,1,3]))

//Return all the prime numbers in an array

myArray = [1, 2, 3, 5, 7, 10, 12, 13, 15];

function prime(arr){
  return arr.filter((number) => {

      for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
      }
      return true;
  });
}


console.log(prime(myArray));

//iife

console.log((function(arr){
  return arr.filter((number) => {

      for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
      }
      return true;
  });
})([1, 2, 3, 5, 7, 10, 12, 13, 15]))

//arrow function

const prime1=(arr)=>{
  return arr.filter((number) => {

      for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
      }
      return true;
  });
}


console.log(prime1(myArray));


//Return all the palindromes in an array

const pallin=function(arr){
var temp=[]
  for(var i=0;i<arr.length;i++){ 
      let str = arr[i];
      let strReverse = str.split("").reverse().join("");
      
      if (str === strReverse) {
        temp.push(str)
      }
  }
  return temp
}
console.log(pallin(["civic","apra","hello"]))

//iife

console.log((function(arr){
  var temp=[]
  for(var i=0;i<arr.length;i++){ 
      let str = arr[i];
      let strReverse = str.split("").reverse().join("");
      
      if (str === strReverse) {
        temp.push(str)
      }
  }
  return temp
})(["civic","apra","nitin"]))

//arrow function

const pallin1=(arr)=>{
  var temp=[]
      for(var i=0;i<arr.length;i++){ 
          let str = arr[i];
          let strReverse = str.split("").reverse().join("");
          
          if (str === strReverse) {
            temp.push(str)
          }
      }
      return temp
  }
  console.log(pallin1(["civic","apra","hello"]))

//Return median of two sorted arrays of same size

const med=function(arr,arr1){
let a=[...arr,...arr1]
b=a.sort()
if(b.length%2===0){
  var i=((b.length/2)-1)
  var j=b.length/2
var medi=(b[i]+b[j])/2
}else{
  var k=(b.length-1)/2
  medi=b[k]
}
return medi
}
console.log(med([1,2,3,4,5],[3,6,7,8,9,10]))

//iife

console.log((function(arr,arr1){
  let a=[...arr,...arr1]
  b=a.sort()
  if(b.length%2===0){
      var i=((b.length/2)-1)
      var j=b.length/2
  var medi=(b[i]+b[j])/2
  }else{
      var k=(b.length-1)/2
      medi=b[k]
  }
  return medi
  }
)([1,2,3],[4,5,6]))

//Remove duplicates from an array

const dupli=function(arr){
  var obj = {};
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
  }
  for (var key in obj) {
      temp.push(key);
  }
  return temp;
}

console.log(dupli([1,2,3,4,5,5,2]))

//another way//IIFE

console.log((function(arr){
  
  let uniqueArr = [];
  
  // loop through array
  for(let i of arr) {
      if(uniqueArr.indexOf(i) === -1) {
          uniqueArr.push(i);
      }
  }
  return uniqueArr
})([1, 2, 3, 2, 3]))

//Rotate an array by k times

const rotateArray =function(arr, k){
  
  return arr.slice(k).concat(arr.slice(0, k))
     
 }
   
 
  
 console.log(rotateArray([1,2,3,4,5,6,7],5))

 //IIFE

 console.log((function(arr, k){
  
  return arr.slice(k).concat(arr.slice(0, k))
     
 })([1,2,3,4,5,6,7],5))

