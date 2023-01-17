//Question 1 : For the given JSON iterate over all for loops(for, for in, for of, forEach)
var stu=[{
    "name":"john doe",
    "age" :"23"
  },{
    "name":"mary doe",
    "age" :"24"
  }];
//For Loop
//Syntax:
//for(initial Expression; condition; update Expression) { // for loop body }

 
for(let i=0; i< stu.length; i++){
 console.log(stu);
}

//output
//{name: 'john doe', age: '23'}
//{name: 'mary doe', age: '24'}
// For-in Loop
//Syntax:
//for (key in object) { // body of for...in }
          for(let key in stu){
       console.log(stu[key]);
    }

//output
// name: "john doe"
// age : "23"
// name: "mary doe"
// age : "24"

//For - of Loop
//Syntax:
//for (variable of iterable) {
    // body of for...of }
  
    
       for(let stus of stu){
         console.log(stu);
          }
//output
//{name: 'john doe', age: '23'}
//{name: 'mary doe', age: '24'}

//For – Each Loop:
//Syntax:
     //Array.forEach(function(currentValue, index, arr))

   
   stu .forEach((ele)=>console.log(ele));

//output
// name:"john doe"
// age:"23"
// name:"mary doe"
// age: "24"

//Question 2 : Create you own resume data in JSON format

let myResume={
	"basics": {
	"name": "Gomathi S",
	"email": "gomathivsubramaniam@gmail.com",
	"phone": 9384683260,
	"degree": "B.SC",
	"location": {
	"address": "2/157 Ottarkaradupalayam, Karadupalayam(PO),Kurumandhur(via)",
	"postalCode": 638457,
	"city": "Gobichettipalaym",
	"state": "Tamilnadu",
	"country": "India",
	},

	"profiles": [
	{
		"github":"https://github.com/GomathiSubramaniam"
	}
	]
	},
	"work": [
	{
	"company": "Cognizant Technology Solution",
	"position": "Senior Process Executive ",
	"startDate": "2017-04-03",
	"endDate": "Present",
	
	},
	],
	"education": [
	{
	"institution": "Gobi Arts & Science Collage",
	"department": " Information Technology ",
	"studyType": "fulltime",
	"batch start year": 2013,
	"batch end year": 2016,
	
	}
	],	
	
	"languages": [
	{
	"language": "Tamil,Enlish",
	}
	]
		
	}
	console.log(myResume);

