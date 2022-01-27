//For the given JSON iterate over all for loops (for, for in, for of, forEach)

let object=[{
    "name":"ramu",
    "age":"25",
    "city":"Banglore",
    "state":"Karnataka",
    "country":"india",
    "role":"software developer",
    "company":"Tech soft"
}]

//for loop

for(var i=0;i<object.length;i++){
    console.log(object[i])
}
//for in loop

for(var i in object){
    console.log(object[i])
}

//for of
for(var k of object){
    console.log(k)
}
//forEach
var res=object.forEach((ele)=> console.log(ele))