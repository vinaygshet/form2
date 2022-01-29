// q1.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
//q2.Use the same rest countries and print all countries name, region, sub region and population




// creating a object
var request = new XMLHttpRequest()
//creating a connection or extractin tha information from the server
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//sending the request to the server
request.send()
//the data's comming from the server is of string so we are converting string to an JSON object
request.onload=function(){
    var data = JSON.parse(request.response)
    for(var i in data){
        console.log(`Country Name :${data[i].name},Region :${data[i].region},Subregion:${data[i].subregion},flag"${data[i].flag},population:${data[i].population}`)
    }

}