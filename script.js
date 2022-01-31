var obj1 =  { name: "Person 1", age:5 };

var obj2 = { age:5, name: "Person 1" };     

var temp=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(x in obj1) 
        if(obj1[x] == obj2[x]) {
          continue; 
        }
      
}
else {
  temp=false;
}
console.log(temp)

