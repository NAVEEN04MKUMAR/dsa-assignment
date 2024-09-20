
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


4. about JSON:
//javascript object notation it is light weight data-interchanges format
//it will useful to the parse the data between the client and server

//convert the js on string into json object
const jsonstring='{"name":"naveen","age":24}';
const jsonobject=JSON.parse(jsonstring);
console.log(jsonobject.name);
console.log(jsonobject.age);
console.log(jsonobject);

//convert the js on object into jsonstring
const jsonobject1={name:"naveen",age:24};
const jsonstring1=JSON.stringify(jsonobject1);
console.log(jsonstring1);

//access the json data
const jsonobject2={name:"naveen",age:24,address:{area:"minnagar"}};
console.log(jsonobject2.name);
console.log(jsonobject2.address.area);
console.log(jsonobject2["age"]);

//modify the json data
const jsonobject3={name:"naveen",age:24,address:{area:"minnagar"}};
jsonobject3.name="kumar";
jsonobject3.address.area="voc nagar";
jsonobject3["age"]="25";
console.log(jsonobject3);
console.log(jsonobject3.address.area);
console.log(jsonobject3["age"]);
console.log(jsonobject3.name);

//looping through the json data
const jsonobjects=["naveen","age:24","minnagar"];
jsonobjects.forEach( jsonobject=>{
   console.log( jsonobject); 
});

//looping through the object data
const jsonobject4={name:"naveen",age:24,address:{area:"minnagar"}};
for(let key in jsonobject4){
    console.log(key+":"+jsonobject4[key])
}

//merging objects:
const obj5={name:"naveen"};
const obj6={age:24};
const obj7={address:{area:"minnagar"}};
const merged={...obj5,...obj6,...obj7};
console.log(merged);



5.slice
//slice return the selected element in an array new array object
//we give the strating argument and returning argument if we are not give the end argument it will automatcally take the nd argument 
let array=[1,2,3,4];

let array1=array.slice(0,2);
console.log(array1);//[ 1, 2 ]


let array2=array.slice(0);
console.log(array2);//[ 1, 2, 3, 4 ]

//slice(-n) starts from the n-th element from the end and goes to the end of the array.
let array3=array.slice(-3);
console.log(array3);//[ 2, 3, 4 ]

//negatie side 1st is inclusive 2nd is exclusive
let array4=array.slice(-3,-2);
console.log(array4);//[ 2 ]

let array5=array.slice(-3,-1);
console.log(array5);//[ 2, 3 ]

let array6=array.slice(-4);
console.log(array6);//[ 1, 2, 3, 4 ]



//6.it is add,remove or replace element from array 
//array.splice(start, deleteCount, item1, item2, ..., itemN)
//it modifies the original array
const array=[1,2,3,4,5];
const removed=array.splice(2,2);
console.log(array);//[ 1, 2, 5 ]
console.log(removed);//[ 3, 4 ]

const array2=[1,2,3,4,5];
const removed2=array2.splice(2,2);
console.log(array2);//[ 1, 2, 5 ]
console.log(removed2);//[ 3, 4 ]

//add element
const array3=[1,2,3,4,5];
const removed3=array3.splice(2,2,6);
console.log(array3);//[ 1, 2, 5, 6 ]
console.log(removed3);//[ 3, 4 ]

//replace element
const array4=[1,2,3,4,5];
const removed4=array4.splice(2,2,6,7,8);
console.log(array4);//[ 1, 2, 6, 7, 8, 5 ]
console.log(removed4);//[ 3, 4 ]

//8.difference between the slice and spice
// slice:
// we will not the modify the array
// return subset of original array
// used to pick the element of the array

// splice:
// we will  the original array modify the array
// return the deleteed elements of array
// used to insert/delete the element of the array

9)//key types:
//1)key types:

//object:key ony strings or symbol,if we pass the number it will cnsider them as the string
//
const obj={};
obj[123]='value1';//123 is not number 
obj[456]='value4';//123 is not number 
obj[789]='value7';//123 is not number 
console.log(obj);
// obj.keys().length.

//2){ '123': 'value1', '456': 'value4', '789': 'value7' }
//here we get the correct order of key sometime i get the different order of key

//3) in object when we searching for properties it is slower  than map becuase it work as the prototype chain
//4)length of length we shold manually wit argumnt we should pass

const obj2 = {
  name: "Naveen",
  age: 24,
  profession: "Engineer"
};
const numberofkeys = Object.keys(obj2).length;
console.log(numberofkeys);  // Output: 3
//5)iteration
//for ... in
for(let key in obj2){
    console.log(key,obj2[key]);
}

//object.key();

Object.keys(obj2).forEach((key)=>{
    console.log(key,obj2[key])
})

//
for(const [key,value] of Object.entries(obj2)){
    console.log(key,value);
}

//6)application:
//used for string ,json etc

const map=new Map();
map.set(123,'value');
map.set({key:'val1'},'objctkey');
map.set({key:'val2'},'objctkey');
map.set({key:'val3'},'objctkey');

console.log(map);

//2)map:it will taje the key as th enumber,string etc
//here always we get the order of key is the how we arrange the order
// Map(4) {
//   123 => 'value',
//   { key: 'val1' } => 'objctkey',
//   { key: 'val2' } => 'objctkey',
//   { key: 'val3' } => 'objctkey'
// }
//3)when we add or delete the value that time it will show as the faster performance commpare with the object  

//4)length of key of it will give the automatically
//5)iteration:

for(let [key,value] of map){
    console.log(key,value);
}
//6)application:
//suited or the complex key value pais,insertion deletion

//9.arrow function:
//multiple argument
const sum=(a,b)=>{
    return a+b;
}
console.log(sum(5,3));

//single parameter
const greet=name=>`Hey,how are you ${name}`;
console.log(greet('naveen'));

//no paramter
const greet1=()=>`Hey,how are you`;
console.log(greet1());


//10)difference between the == lose equality and the === strict equality:
lose:compare the value
strict:compare the value an data type
console.log(1=='1');//true
console.log(true=='1');//true
console.log(true==1);//true
console.log(false=='1');//false
console.log(false==1);//false
console.log(null==undefined);//true

console.log(1==='1');//false
console.log(true==='1');//false
console.log(true===1);//false
console.log(null===undefined);//false

//11.first calss function:
//1)assuning function to variable
const greet=function(){
    console.log('hello world');
};
greet();

//2)passing function as the  argument
function sayhello(){
    console.log('hello');
}

function executefunction(fn){
    fn();
}
executefunction(sayhello);

//returning function from another function
function multiplier(factor){
    return function(number){
        return number*factor;
    };
}

const double=multiplier(3);
console.log(double(5));//15

//storing function in arrray object
const operations={
    add:function(a,b){
        return a+b;
    },
    multiply:function(a,b){
        return a*b;
    }
};
    console.log(operations.add(2,3));
    console.log(operations.multiply(2,3));

//12)first order function:it is represent like the have it is accept the function as the argument,also not return the any function 
function add(a,b){
    return a+b;
}

const result=add(6,3);
console.log(result);

//13)higher order function
//it is accept the function as the argument and the  return the function 
function add(a,b){
    return a+b;
}

function operate(fn,x,y){
    return fn(x,y);
}

const result=operate(add,5,3);
console.log(result);

//14)unary function:
//it accept the only one argument
//return the any type of value

function unary(a){
    return a*a;
}
console.log(unary(3));
const unary1=a=>a*2;
console.log(unary1(4));


//15)currying function:
//functional programming instead of taking all argument at once take the firt argument and return new function that takes the second argument,once all argument passed,final result is computed
function multiply(a){
    return function(b){
        return a*b;
    };
}

const multiplybytwo=multiply(2);//return the function multiply by 2
console.log(multiplybytwo(5));

//16)pure function:

//no side effects:it will not modify the any external state on exeternal varaible can change,operate  with the only input
function add(a,b){
    return a+b;
}
console.log(add(2,3));//whatever input we ae given it will take the input then it will give the result

//impure function example it means that it will modify the external state like the global 
let count=5;
function increment(){
    count+=1;
    return count;
}
console.log(increment());


//18)know the difference between the let and var
//the key word will not use as the before initialisation
function userdetails(username){
    if(username){
     let age=24;
     var salary=10000000; 
     console.log(age);//let is the functional scope variable
     }
    let age=25;
    console.log(salary);//var is the global (scope) variable then 
    console.log(age);//let is the functional scope variable
}
userdetails("naveen");

//19)why let choose instead of var
//if the function scope(let) scope will get the correct answer in loops
//if the global scope(var) scope will over written answer in loops

for(let i=0;i<3; i++){
    setTimeout(()=>console.log(i),100);
}//0,1,2

for(var i=0;i<3; i++){
    setTimeout(()=>console.log(i),100);
}//3,3,3

//20)how to reassign the variable in switch component
//x=1 mean it will execute only one block 
//if x=2 mean it will execute only 2nd block 
//if we want to run both the we wantremove the break from the 1st block also make the x=1; 
let x = 1;
switch (x) {
  case 1:{
    let name="naveen";
    console.log(name);
}
  case 2:{
    let name="kumar1"; // SyntaxError for redeclaration.
    console.log(name);
    break;
}
}

//21.temporal dead zone:
//we wil not access the variable before initilalisation,if we access the then it show the error 
function temp(){
  //  console.log(temp1);//ReferenceError: Cannot access 'temp1' before initialization
    //console.log(temp2);//ReferenceError: Cannot access 'temp2' before initialization
    console.log(temp3);//undefined
    let temp1=1;
    const temp2=1;
    var temp3=1;
    
}
temp();

//22.Immediately invoked function expression, iife
//iife

(function(){
    var about="Naveen working as the frontend developer";
    console.log(about);//Naveen working as the frontend developer
})();
    // console.log(about);//ReferenceError: about is not defined

const url="https://www.indeed.com/q-javascript-developer-with-google-jobs.html";
//encodeURIComponent it will escape the special meaning
const encoded=encodeURIComponent(url);
console.log(encoded);

//https%3A%2F%2Fwww.indeed.com%2Fq-javascript-developer-with-google-jobs.html

//Decodes a URI component that has been encoded.
const decoded=decodeURIComponent(url);
console.log(decoded);
https://www.indeed.com/q-javascript-developer-with-google-jobs.html

//encodeuri:Encodes most special characters but leaves characters like :, /, ?, &, = intact.
const encoded1=encodeURI(url);
console.log(encoded1);
//https://www.indeed.com/q-javascript-developer-with-google-jobs.html

//decodeURI(): Decodes an entire URL that has been encoded
const decoded1=decodeURI(url);
console.log(decoded1);
//https://www.indeed.com/q-javascript-developer-with-google-jobs.html

//24.hoisting:
//declaration should be moved to top 

console.log(message);
var message="Naveen working as a frontend developer";

var message="Naveen working as a frontend developer";
console.log(message);

//we can place the again top of the  declaration
message1("Good morning"); //Good morning 
function message1(name) {
  console.log(name);
}

//25.memoziation:
//caching the previously computed results
const memoaddition=()=>{
    let cache={};

return (value)=>{
    if(value in cache){
        console.log("fetching from cache");
        return cache[value];
    }
    else{
        console.log("calculating result")
        let result=value+20;
        cache[value]=result;
        return result;
    }
};
};
const addition=memoaddition();
console.log(addition(80));//calculating result 100
console.log(addition(80));//fetching from cache 100


//26.Classes:
//it is the blueprint fo the creating objects
//insid that clas we will not use the function keyword
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes a sound`);
    }
}
const dog=new Animal('Dog');
dog.speak();


//inheritance
class Animals{
    constructor(name){
        this.name=name;
    }
    //ths one inherited by the dog class
    speak(){
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animals{
    constructor(name){
        super(name);//we are call the parant constructor
    }
    bark(){
        console.log(`${this.name} barks`);
    }
}
const mydog=new Dog('Buddy');
mydog.speak();
mydog.bark();

//27.closure 
//access the variable from its outer scope even after outer function has finished eecuting 

function outerfunction(outervariable){
    return function innerfunction(innervariable){
        console.log(`inner variable:${innervariable}`);
        console.log(`outer variable:${outervariable}`);
    }
};
const newfunction=outerfunction('outside');
console.log(newfunction);
newfunction('inside');

//closure private example
function createsecureholder(secret){
    return {
        getSecret:function(){
            return secret;
        },
        setSecret:function(newsecret){
            secret=newsecret;
        }
    };
};
//closure even after get the value of the initial secret then when we assign the setsecret w change the value from secret to new sssecret 
const secretholder=createsecureholder('initial secret');
console.log(secretholder.getSecret());
secretholder.setSecret('new sssecret');
console.log(secretholder.getSecret());

//28.global and local scope
//block scope: we can access this one within scope outside this scope this show the error
{
    let blockscoped="i am block-scoped";
    console.log(blockscoped);//i am block-scoped
}
    console.log(blockscoped);//ReferenceError: blockscoped is not defined
    
{
    var functionscoped="i am function scoped";
}
console.log(functionscoped);//i am function scoped


//29.modular organise code into the smaller ,reusable,maintable pieces
//split the code into the separate files and functions

//30.why:
//we can split them into the logicalspecies easier to understand
//we can import when ever needed at the differet file
//if we use the everyting at the single file thenit causes error like the global scope,if we make the separate then it is not show the collision
