
1.What are the ways i can create the object:

//#1 object literatural way
var object={
name:"naveen",
age:"24"
};
console.log("object",object);

//#2:new object constructor
const obj2=new Object();
obj2.key1="value1";
obj2.key2="value2";
obj2.key3="value3";

console.log("object",obj2);
//we can get the all the key value pair by console the obj2


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

//#3 objet create method
//#3 create the new object using the already existing object

let exp1={
    what:'prepare',
    branch:'mechanical',
    score:'disqualified'
}


let exp2={
 prop1: {
    value: 'value1',
    writable: true,
    enumerable: true,
    configurable: true
  },
  prop2: {
    value: 'value2',
    writable: false,
    enumerable: true,
    configurable: false
  }    }

var final=Object.create(exp1,exp2);
console.log("final",final.what);
console.log("final",final.branch);
console.log("final",final.score);
console.log("final",final.prop1);
console.log("final",final.prop2);

//from this if we passs the exp2 as a argument directly then we will get the object it show type error
//if we give access then it show the object
//if we access the exp1 only the objectname we will not get the value 


2.about the prototype chaining:
Is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. 
i.e, When you create an object using a constructor function or a class, the created object inherits properties from a prototype object.
e.x:
function Animal(name){
    this.name=name;
}

Animal.prototype.sayHello=function(){
    console.log(`Hello,I am ${this.name}`);
};


const lion=new Animal('lion');
lion.sayHello();
    console.log(Object.getPrototypeOf(lion));//{ sayHello: [Function (anonymous)] } iyt represent have the sayhello ariable have th funtion
    console.log(Object.getPrototypeOf(Object.getPrototypeOf(lion)));//[Object: null prototype] {} that one inside have the null represent at the node.js
    console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(lion))));//null

//if we through the key value then get the value 




3.difference betweeen the call,apply,bind
//Call:the call() method involkes a fuction with a given this value argumet and  argument provided by one

var employee1={firstname:"naveen",lastname:"kumar"};
var employee2={firstname:"muthu",lastname:"kumar"};
var employee3={firstname:"vignesh",lastname:"kanna"};


function invite(greeting1,greeting2){

console.log(
    greeting1+" "+this.firstname+" "+this.lastname+" "+greeting2
    );    
}

invite.call(employee1,"hello","how are you?");
invite.call(employee2,"hello","where are you?");
invite.call(employee3,"hello","who are you");


//apply
//pass the arguments as the array with the array

var employee4={firstname:"naveen",lastname:"kumar"};
var employee5={firstname:"muthu",lastname:"kumar"};
var employee6={firstname:"vignesh",lastname:"kanna"};


function invite2(greeting3,greeting4){

console.log(
    greeting3+" "+this.firstname+" "+this.lastname+" "+greeting4
    );    
}

invite2.apply(employee4,["hello","how are you?"]);
invite2.apply(employee5,["hello","where are you?"]);
invite2.apply(employee6,["hello","who are you"]);

//bind
//pass the any number of arguments 

var employee7={firstname:"naveen",lastname:"kumar"};
var employee8={firstname:"muthu",lastname:"kumar"};
var employee9={firstname:"vignesh",lastname:"kanna"};


function invite3(greeting5,greeting6){

console.log(
    greeting5+" "+this.firstname+" "+this.lastname+" "+greeting6
    );    
}

var invitee1=invite3.bind(employee7);
var invitee2=invite3.bind(employee8);
var invitee3=invite3.bind(employee9);

invitee1("hello","how are you?");
invitee2("hello","where are you?");
invitee3("hello","who are you")




