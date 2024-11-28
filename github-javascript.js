
//1.What are the ways i can create the object:

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

//doubt:
//2.about the prototype chaining:
//Is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. 
//i.e, When you create an object using a constructor function or a class, the created object inherits properties from a prototype object.
function Animal(name){
    this.name=name;
}

Animal.prototype.sayHello=function(){
    console.log(`Hello,I am ${this.name}`);
};


const lion=new Animal('lion');
lion.sayHello();
    console.log(Object.getPrototypeOf(lion));//{ sayHello: [Function (anonymous)] } it represent have the sayhello variable have the funtion
    console.log(Object.getPrototypeOf(Object.getPrototypeOf(lion)));//[Object: null prototype] {} that one inside have the null represent at the node.js
    console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(lion))));//null

//if we through the key value then get the value 

//3.difference betweeen the call,apply,bind
//Call:the call() method involkes a fuction with a given this value argument and  argument provided by one

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


//4. about JSON:
//javascript object notation it is light weight data-interchanges format
//it will useful to the parse the data between the client and server

//convert the js on string into json object
const jsonstring='{"name":"naveen","age":24}';
const jsonobject=JSON.parse(jsonstring);
console.log(jsonobject.name);
console.log(jsonobject.age);
console.log(jsonobject);

//convert the json on object into jsonstring
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



//5.slice
//slice return the selected element in an array new array object
//we give the strating argument and returning argument if we are not give the end argument it will automatcally take the end argument 
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


//splice:
//6.it is add,remove or replace element from array 
//array.splice(start, deleteCount, item1, item2, ..., itemN)
//it modifies the original array
const array=[1,2,3,4,5];
const removed=array.splice(2,2);
console.log(array);//[ 1, 2, 5 ]
console.log(removed);//[ 3, 4 ]

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

//splice:
// we will  the original array modify the array
// return the deleteed elements of array
// used to insert/delete the element of the array

//9)key types:
//1)key types:
//object:key only strings or symbol,if we pass the number it will consider them as the string
const obj={};
obj[123]='value1';//123 is not number 
obj[456]='value4';//123 is not number 
obj[789]='value7';//123 is not number 
console.log(obj);
// obj.keys().length.
//2){ '123': 'value1', '456': 'value4', '789': 'value7' }
//here we get the correct order of key sometime I get the different order of key
//3) in object when we searching for properties it is slower  than map becuase it work as the prototype chain
//4)length of length we shold manually with argumnt we should pass
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

//2)map:it will take the key as the number,string etc
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
//lose:compare the value
//strict:compare the value an data type
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

//2)passing function as the argument
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
//functional programming instead of taking all argument at once take the firt argument and
//return new function that takes the second argument,once all argument passed,final result is computed
function multiply(a){
    return function(b){
        return a*b;
    };
}

const multiplybytwo=multiply(2);//return the function multiply by 2
console.log(multiplybytwo(5));

//16)pure function:

//no side effects:it will not modify the any external state on exeternal varaible can change,operate with the only input
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
//we will not access the variable before initilalisation,if we access the then it show the error 
function temp(){
    console.log(temp1);//ReferenceError: Cannot access 'temp1' before initialization
    console.log(temp2);//ReferenceError: Cannot access 'temp2' before initialization
    console.log(temp3);//undefined
    let temp1=1;
    const temp2=1;
    var temp3=1;
    
}
temp();

//22.Immediately invoked function expression, iife
//iife
//Variables inside an IIFE are not accessible from outside.
(function(){
    var about="Naveen working as the frontend developer";
    console.log(about);//Naveen working as the frontend developer
})();
    console.log(about);//ReferenceError: about is not defined

//23.decode and encode:
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




//31.service-worker:
//that runs in the background, separate from a web page and provides features that don't need a web page or user interaction
//offline mode:cache collaborartion data,files and assets so users can still view and work with document offline
//push notification:notify user about updates,like new comments changes to shared document

import { cache } from "fabric";
self.addEventListener('install',event=>{
    console.log('service woker installed');

    event.waitUtil(
        caches.open('my-cache-v1').then(cache=>{
                console.log('service woker installed');
                return cache.addAll([
                    '/',
                    './sample.html',
                    './mail.jsx',
                ]);
            })
    );
});


self.addEventListener('activate',event=>{
    console.log('service woker activated');

    event.waitUtil(
        caches.keys().then(cachenames=>{
            return Promise.all(
                cachenames.map(cache=>{
                    if(cache!=='my-cache-v1'){
                        console.log('service woker:deleting old cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
        );
 });


 self.addEventListener('fetch',event=>{
    console.log('service woker fetching:',event.request.url);

    event.respondWith(
        caches.match(event.request).then(response => {
          // Serve cached files or fallback to fetching from network
          return response || fetch(event.request);
        })
      );
     });


//34.indexed db:
// IndexedDB is a browser-based database that allows you to store large amounts of structured data, including files/blobs.
import React,{useEffect} from 'react';
const Indexdbexample=()=>{
    const dbname='naveen';
    const storename='naveens';
    useEffect(()=>{
        const opendatabase=async()=>{
            const request=indexedDB.open(dbname,1);

            request.onupgradeneeded=(event)=>{
                const db=event.target.result;
                db.createObjectStore(storename,{keyPath:'id'});
                console.log('database setup complete');
            };

            request.onsuccess=(event)=>{
                const db=event.target.result;
                console.log('database opened successfully');

                const transaction=db.transaction(storename,'readwrite');
                const store=transaction.objectStore(storename);

                store.add({id:1,name:'item 1'});
                store.add({id:2,name:'item 2'});

                transaction.oncomplete=()=>{
                    console.log('transaction completed');
                };

                transaction.onerror=(event)=>{
                    console.log('transaction error',event.target.error);
                };
            };
            request.onerror=(event)=>{
                console.log('transaction error',event.target.error);
        }
    }
    opendatabase();
    },[]);
    return (
        <div>
            <h1>IndexedDB Example</h1>
            <p>Check the console for IndexedDB operations.</p>
        </div>
    );
};
export default Indexdbexample;

//36.about local and session storage:
//Web Storage refers to the browser's ability to store data on a user's computer, either temporarily or persistently, using two key mechanisms:
//Local Storage (localStorage): Stores data with no expiration time, which remains even when the browser is closed and reopened.

localStorage.setItem('name','naveen');
const name1=localStorage.getItem('name');
console.log(name);
localStorage.removeItem('name');
localStorage.clear();

//Session Storage (sessionStorage): Stores data only for the duration of the page session. Once the tab or window is closed, the data is deleted.
sessionStorage.setItem('name','naveen');
const name=sessionStorage.getItem('name');
console.log(name);
sessionStorage.removeItem('name');
sessionStorage.clear();

//37.storag event:
    <!-- storage event is the key value pair is added a,removed,modified inlocalstorage or session storage -->
    <!-- keychanges are occure at he differet tabs not as the same tab -->
    <script>
        window.addEventListener('storage',(event)=>{
            console.log('storage event detected');
            console.log('key',event.key);
            console.log('old value',event.oldValue);
            console.log('new value',event.newValue);
            console.log('url',event.url);
        });
         function modifystorage(){
            localStorage.setItem('ekey','evalue');
         }
    </script>
</head>
<body>
    <h1>storage event example</h1>
    <button onclick="modifystorage()">modify localstorage</button>
</body>

//38)indexeddb:
import React,{useEffect} from 'react';
const Indexdbexample=()=>{
    const dbname='naveen';
    const storename='naveens';
    useEffect(()=>{
        const opendatabase=async()=>{
            const request=indexedDB.open(dbname,1);

            request.onupgradeneeded=(event)=>{
                const db=event.target.result;
                db.createObjectStore(storename,{keyPath:'id'});
                console.log('database setup complete');
            };

            request.onsuccess=(event)=>{
                const db=event.target.result;
                console.log('database opened successfully');

                const transaction=db.transaction(storename,'readwrite');
                const store=transaction.objectStore(storename);

                store.add({id:1,name:'item 1'});
                store.add({id:2,name:'item 2'});

                transaction.oncomplete=()=>{
                    console.log('transaction completed');
                };

                transaction.onerror=(event)=>{
                    console.log('transaction error',event.target.error);
                };
            };
            request.onerror=(event)=>{
                console.log('transaction error',event.target.error);
        }
    }
    opendatabase();
    },[]);
    return (
        <div>
            <h1>IndexedDB Example</h1>
            <p>Check the console for IndexedDB operations.</p>
        </div>
    );
};
export default Indexdbexample;

//39)about the postmessage:
//parant window:
<h1>Parant window</h1>
<iframe id="childframe" src="post1.html" width="400" height="200"></iframe>
                <button onclick="sendmessage()">Send message to child</button>
    <script>
        //used for communication between the windows or iframes from different origin
        //useful for the cross-origin-communication such as the when you want an iframe to send data to its parant windowor between different browser
        function sendmessage(){
         const iframe=document.getElementById("childframe");
         const message='hello from the parant window';
         iframe.contentWindow.postMessage(message,'*');
        }

        window.addEventListener('message',(event)=>{
            console.log('parant received:',event.data);
        })
    </script>


//child window:
<h1>Child window</h1>
<p id="messagedisplay">waiting for message</p>
<script>

window.addEventListener('message',(event)=>{
console.log('child received:',event.data);
document.getElementById('messagedisplay').textContent=event.data;
event.source.postMessage('Hello from the child window!', event.origin);
})
</script>

40).about cookies:

// Cookies are small pieces of data stored on the user's browser by a website, which the server can later retrieve. 
// They are commonly used for authentication, session management, and storing user preferences.
Set a cookie that expires in 7 days
const now = new Date();
now.setTime(now.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days
document.cookie = "username=JohnDoe; expires=" + now.toUTCString() + "; path=/";


//41)why we need cookie:
//when user visits a web page,user profile can be stored in cookie
//next time user visits te page,the cokie remembers the user profile

//42).options:
//1)we can set the expire date
//2)set the maximu/ age for the cookies
//3)we can define the domain we can access the cookie that domain only
//4)we can define path
//5)we can access this one at the through http

//43).we can delete the cookie through the experiation date:
//document.cookie="username=;expires=Thu,01 Jan 2025 00:00:00 UTC;path=/";

//44)why web storage:
//if we store at the local then we dont have the frequent request to the server improving performance and responsiveness  
//more storage capacity on the compare wth the cookie like the web storage have the 10MB and the cookie have the 4KB
//use the single page application,also have the offline capabilities,enable functionality


//45)hot verify the web workrs and web storage support in your browser        
        const storagesupport=(typeof(Storage)!=="undefined")?
        "web storage is supported!":
        "web storage is not supported in this browser!";
        document.getElementById("storage-support").innerText=storagesupport;
        

        const workersupport=(typeof(worker)!=="undefined")?
        "web  workers is supported!":
        "web workers is not supported in this browser!";
        document.getElementById("worker-support").innerText=workersupport;

//46)what is promise:
//promise is the object that may produce a single value some time in the future with either a resolved value or a reason that is not resolved
//.then():result with the fulfilled
//handles error when proise rejected
//.finally():run when promise fullfilled or rejected


let promise=new Promise(function(resolve,reject){
    let success=false;
    if(success){
        resolve("resolved");
    }
    else{
        reject("failed");
    }
});

promise.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})

//47.why promise:

//1)if we use with asyncfunction  then we have the nested loop the difficult read 
asynFunction1(data,function(result1){
      asyncFunction2(result1,function(result2){
          asyncFunction3(result2,function(result3){
              console.log(result3);
          });
      });
  });
  //pending:promise is created but the result not yet been determined

  asyncFunction(data)
  .then(result1=>asyncFunction(result1))
    .then(result2=>asyncFunction(result2))
      .then(result3=>console.log(result3))
        .then(error=>console.log(error))
//2) single threaded then it is time consuming operations like api calls asynchronouly without blocking main thread 

//3)states:
//pending The promise has been created but the result (either success or failure has not yet been determined.
//The promise has been successfully completed, meaning the asynchronous operation finished successfully.
//Rejected:The promise has failed, indicating that the asynchronous operation encountered an error or issue.

//48)call back function:
//passed the function passed into the another function as an argument
//it will use ful for the asynchronous operation when we executing the after completing the current task 

function greeting(name){
    console.log('hello',name);
}

function processuserinput(callback){
    const name='alice';
    callback(name);
}
processuserinput(greeting);//o/p:hello alice

//49)why we need the callbacks:
//uses the we can pass the different callback function to the same function
//js single threaded,meaning it can't execute multiple operation at the same time ,call back will allow to the offloaded,completed later,preventing the blocking ofother operation
 //javascript event driven language,instead of waiting for the response it will keep executing while listening other events
  
 function firstfunction(){
     setTimeout(function (){
console.log("first function called");         
     },1000);
 }
 
  function secondfunction(){
console.log("second function called");         
 }

 firstfunction();
 secondfunction();
 //second function called
//first function called
//here it is not waiting for the above one is completed secondfunction then we have the 

// //50)resolve or reject the first promises settles
// //use ful for the fastest response
// //race method in promise 
const promise9=new Promise((resolve)=>{
    setTimeout(()=>resolve("promise 1 resolved"),3000 );
})

const promise10=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promise 2 resolved"),1000 );
});

Promise.race([promise9,promise10])
.then(result=>{
    console.log(result);//o/p:promise 2 resolved
})
.catch(error=>{
    console.error("error",error);
})


// //51)strict mode:
// //we can write code in the cleaner,safer, and more secure code

// a)"use strict";//use strict for global

// b)
// "use strict";
// function example(a, a) {
//     console.log(a,a);
//     // SyntaxError: Duplicate parameter name not allowed in this context
// }
// example(h,h);

// c)
// //use strict for function only
// function example(){
//     "use strict";
// }


//52)why strict mode: notify the bad syntex into the real error
//catching common error i get the exception for common coding mistakes
//block the use of certain javascript feature that can access lead to inserure code 
//it prevents theuse of features that can lead to inconsistant

"use strict";
x=3.14;
console.log(x);//ReferenceError: x is not defined

//throw error for the assigning the value for the read only properties:

 "use strict";
const obj=Object.freeze({name:"naveen"});
console.log(obj);
obj.name="kumar";
console.log(obj.name);//Cannot assign to read only property 'name' of object '#<Object>'


// //53)double escalation:
//any expression to boolean(true or false)
let value1="hello";
let value2=0;
console.log(!!value1);
console.log(!!value2);
//falsy:false,0,"empty string",null,undefined,NaN otherwise true


//54)delete value in the javascript:
//delete only removes the property from the object it is not affect the prototyp chain
//we can't the delete the variable from the var,let, const
//if we remove then can have the huge memory
remove property from object:
let person={
    name:'john',
    age:30
    
};
console.log(person);
delete person.age;
console.log(person);

//if we delete then element will removed but it is remain same length
let arr=[1,2,3,4];
console.log(arr);
delete arr[2];
console.log(arr);
console.log(arr.length);

//55)what about type of operator:
// typeof "naveen";
console.log(typeof 'naveen')
console.log(typeof 1.23)

//56)about eval
//eval():it can put the string into the actual javacipt code
let x=10;
let y=20;
let result=eval("x+y");
console.log(result);

let userinput="alert('hacked!')";
eval(userinput);


//57)undefined and null:
//both are javacript data typs that represent the absense of a value but they are used in the different meaning
//undefined:lack of assigned value to variable ,it is default value assigned to a varaible that has been declared but not initialised

//how it is occurer when value is declared and not gven value
let z;
console.log(z);//undefined

//return function does not explicitly return value
function test(){}
console.log(test());//undefined

let person={
    name:'john',
    age:30
    
};
console.log(person);
delete person.age;
console.log(person.age);//undefined
//null:
//it is represent intentional absence value or variable have the no value
let z1=null;
console.log(z1);
let obj = { name: 'Alice', age: null }; 
console.log(obj.age); // Output: null
console.log(typeof null);//object but it is not actually object there is te bug

//58.How do you receive server-sent event notifications:

//Server-Sent Events (SSE) is a web technology that allows servers to push updates to clients over HTTP. 
//Unlike WebSockets, SSE is unidirectional, meaning data flows only from the server to the client. 

const express = require('express');
const app = express();

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Send a welcome message
    res.write('data: Welcome to Server-Sent Events!\n\n');

    // Send periodic updates
    const intervalId = setInterval(() => {
        const timestamp = new Date().toISOString();
        res.write(`data: Current time is ${timestamp}\n\n`);
    }, 3000);

    // Clean up on client disconnect
    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`SSE server running on port ${PORT}`));

//client side:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSE Demo</title>
</head>
<body>
    <h1>Server-Sent Events</h1>
    <div id="messages"></div>

    <script>
        // Create an EventSource to listen to the SSE endpoint
        const eventSource = new EventSource('http://localhost:5000/events');

        // Listen for the 'message' event
        eventSource.onmessage = (event) => {
            const messageDiv = document.getElementById('messages');
            const newMessage = document.createElement('p');
            newMessage.textContent = event.data;
            messageDiv.appendChild(newMessage);
        };

        // Handle errors
        eventSource.onerror = (error) => {
            console.error('EventSource error:', error);
            eventSource.close();
        };
    </script>
</body>
</html>

//When to Use SSE
//Real-time notifications.
//Stock price updates.
//Live sports scores.

//59.how to check the server side event support browser or not:
//To check if a browser supports Server-Sent Events (SSE), you can use JavaScript to verify the existence of the EventSource object,
//which is the interface used to handle SSE in browser
if (typeof EventSource !== 'undefined') {
    console.log('Server-Sent Events are supported in this browser!');
} else {
    console.log('Server-Sent Events are NOT supported in this browser.');
}

//60.What are the events available for server sent events:

//Event Type Description Default
//open	Fired when the connection is established.	
//Built-in message	Fired for all messages with no event: type.	
//Built-in error Fired when an error occurs (e.g., server unavailable).	
//Built-in customEvent	Custom event defined by the developer.	
const eventSource = new EventSource('/events');

eventSource.onopen = () => console.log('Connection established.');
eventSource.onmessage = (event) => console.log('Message:', event.data);
eventSource.onerror = (event) => console.error('Error:', event);

eventSource.addEventListener('customEvent', (event) => {
    console.log('Custom event data:', event.data);
});

//61.promises:
//Promises in JavaScript are a powerful way to handle asynchronous operations. 
//They follow a set of fundamental rules and behaviors that ensure consistent and predictable handling of asynchronous code.

//A Promise is a State Machine
//A Promise has three states:

Pending: Initial state, not yet fulfilled or rejected.
Fulfilled: The operation completed successfully, resulting in a resolved value.
Rejected: The operation failed, resulting in a rejection reason.
Once a promise is either fulfilled or rejected, it becomes settled and can no longer change state.

    //.then() Returns a New Promise
//Every call to .then() returns a new promise that can be chained.
//The return value of the .then() callback determines the state of the new promise:
// If the callback returns a value, the new promise resolves with that value.
// If the callback throws an error, the new promise rejects with that error.
// If the callback returns a promise, the new promise adopts the state of that returned promise.

Promise.resolve(10)
    .then((value) => value * 2) // Returns 20
    .then((value) => Promise.resolve(value + 10)) // Resolves to 30
    .then(console.log); // Logs: 30


    //
A Promise Can Only Be Resolved or Rejected Once
A promise can transition to fulfilled or rejected only once. Subsequent calls to resolve or reject are ignored.

new Promise((resolve, reject) => {
    resolve('Success');
    resolve('Ignored'); // Ignored
    reject('Also ignored'); // Ignored
}).then(console.log);
Output:
Success


//62.callback in call back:
 //A callback in callback refers to a scenario where one callback function is nested inside another callback.
//This is commonly seen when working with asynchronous operations that depend on each other, such as making multiple API calls or performing sequential file operations.
//problem:
function taskA(callback) {
    setTimeout(() => {
        console.log('Task A completed');
        callback();
    }, 1000);
}

function taskB(callback) {
    setTimeout(() => {
        console.log('Task B completed');
        callback();
    }, 1000);
}

function taskC() {
    setTimeout(() => {
        console.log('Task C completed');
    }, 1000);
}

// Callbacks inside callbacks
taskA(() => {
    taskB(() => {
        taskC();
    });
});

//solution to avoid the call back hell:
const taskA = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task A completed');
            resolve();
        }, 1000);
    });

const taskB = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task B completed');
            resolve();
        }, 1000);
    });

const taskC = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task C completed');
            resolve();
        }, 1000);
    });

// Chaining promises
taskA()
    .then(taskB)
    .then(taskC)
    .then(() => console.log('All tasks completed'));



//63.What is Promise Chaining?
//Promise chaining is a technique in JavaScript where multiple asynchronous operations are executed in sequence by chaining .then() calls on a promise. 
//Each .then() passes the resolved value to the next .then() in the chain, enabling structured and readable handling of sequential tasks.

// How Promise Chaining Works
// A promise is created.
// .then() is called to define a callback for when the promise resolves.
// The .then() returns a new promise, allowing the chain to continue.
// Each subsequent .then() operates on the resolved value of the previous one.

new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000); // Resolves with 10 after 1 second
})
    .then((result) => {
        console.log(result); // 10
        return result * 2; // Pass 20 to the next .then()
    })
    .then((result) => {
        console.log(result); // 20
        return result + 5; // Pass 25 to the next .then()
    })
    .then((result) => {
        console.log(result); // 25
        console.log('Chaining complete');
    });


//Key Benefits of Promise Chaining
// Sequential Execution: Ensures tasks are executed in a specific order.
// Clean Syntax: Avoids deeply nested callbacks ("callback hell").
// Error Propagation: Errors are caught and handled centrally using .catch().

//64.promissess all:

//Promise.all() is a method in JavaScript that allows you to execute multiple promises in parallel and wait for all of them to be resolved (or for any of them to be rejected). 
//It takes an iterable (usually an array) of promises as input and returns a single promise that resolves when all the input promises have resolved, or it rejects as soon as one of the promises is rejected.

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Resolved 1'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 500, 'Rejected 2'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1500, 'Resolved 3'));

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // This won't run because of rejection
    })
    .catch((error) => {
        console.log(error); // Logs: Rejected 2
    });

// important Points About Promise.all()
// All Promises Must Resolve: If you want all promises to be handled together, you must ensure that none of them reject. A rejection will cause the whole Promise.all() to reject.
// Order of Results: The results are returned in the same order as the promises in the array, not in the order in which they were resolved. This is useful when the promises are independent of each other but you need the results in a specific sequence.
// Concurrent Execution: Promise.all() executes the promises concurrently, meaning they run in parallel, and it doesn’t wait for one to finish before starting the next.
// Return Value: The value returned by Promise.all() is an array of resolved values, or the rejection reason if any promise fails.

//65.promise race:
//What is the Purpose of the Promise.race() Method?
//The Promise.race() method in JavaScript is used to return the first promise from an iterable (such as an array) that settles (either resolves or rejects).
//Unlike Promise.all(), which waits for all promises to be settled, Promise.race() only waits for the first promise to be resolved or rejected and then returns that result.

const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'First Promise Resolved'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 500, 'Second Promise Rejected'));

Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error); // "Second Promise Rejected"
    });

//Key Points About Promise.race()
//Only the First Settled Promise Matters: Once the first promise settles (either resolves or rejects), Promise.race() resolves or rejects immediately, ignoring any remaining promises.
//Useful for Timeout Handling: Promise.race() is often used when you need to race an asynchronous operation against a timeout. For example, you can race a network request against a timeout to ensure it doesn’t take too long.
//Order of Promise Handling: The order of promises in the array matters; the first promise to resolve or reject is the one that determines the outcome.

//When to Use Promise.race()
//Timeouts: To implement timeouts for asynchronous operations, ensuring they don't run indefinitely.
//First-come, first-served: When you have multiple asynchronous tasks and only care about the first one that finishes.
//Abort or Cancel Operations: When you want to cancel an operation if another one finishes first.

//66.strict mode in react:

What is Strict Mode in JavaScript?
Strict mode in JavaScript is a way to opt into a restricted version of JavaScript that helps catch common coding mistakes and prevents the use of certain features that are considered error-prone. It was introduced in ECMAScript 5 (ES5) to make JavaScript code safer and more predictable by enforcing stricter parsing and error handling.

When you enable strict mode, certain JavaScript behaviors that are normally tolerated are flagged as errors, allowing you to avoid potential issues during development.


What is Strict Mode in JavaScript?
Strict mode in JavaScript is a way to opt into a restricted version of JavaScript that helps catch common coding mistakes and prevents the use of certain features that are considered error-prone. It was introduced in ECMAScript 5 (ES5) to make JavaScript code safer and more predictable by enforcing stricter parsing and error handling.

When you enable strict mode, certain JavaScript behaviors that are normally tolerated are flagged as errors, allowing you to avoid potential issues during development.

How to Enable Strict Mode
Strict mode can be enabled in two ways:

Globally: By adding the "use strict"; directive at the beginning of a JavaScript file.

javascript
Copy code
"use strict";
// Code in strict mode
let x = 3.14; // Valid
Locally: By adding the "use strict"; directive inside a function to apply strict mode only within that function.

javascript
Copy code
function example() {
    "use strict";
    let x = 3.14; // Valid in strict mode
}
Key Features of Strict Mode
Strict mode modifies how JavaScript behaves in the following ways:

Prevents the use of undeclared variables:

Without strict mode, JavaScript allows you to create global variables by accident.
In strict mode, attempting to assign a value to an undeclared variable will throw an error.
javascript
Copy code
"use strict";
x = 10; // Error: x is not defined
Eliminates this coercion:

In non-strict mode, this in a function refers to the global object (window in browsers) when the function is called without a context.
In strict mode, this remains undefined when a function is called without a context (e.g., using call or apply).
javascript
Copy code
"use strict";
function show() {
    console.log(this); // undefined in strict mode
}
show();
Disallows the use of duplicate property names or parameters:

In strict mode, defining an object with duplicate property names or a function with duplicate parameter names throws an error.
javascript
Copy code
"use strict";
const obj = {a: 1, a: 2}; // Error: Duplicate data property in object literal
Disallows writing to readonly properties:

In strict mode, trying to assign a value to a constant or a non-writable property will throw an error.
javascript
Copy code
"use strict";
const obj = {};
Object.defineProperty(obj, 'name', { value: 'John', writable: false });
obj.name = 'Doe'; // Error: Cannot assign to read-only property 'name'
Makes eval safer:

In strict mode, the eval function cannot be used to introduce new variables into the surrounding scope.
Variables declared inside eval() do not affect the outer scope.
javascript
Copy code
"use strict";
eval('var x = 20;');
console.log(x); // Error: x is not defined
Throws error for with statement:

The with statement is disallowed in strict mode, as it creates confusion with variable scope and can lead to unpredictable behavior.
javascript
Copy code
"use strict";
with (Math) {
    x = cos(2); // SyntaxError: Strict mode code may not include a with statement
}
Prevents octal literals:

In strict mode, using octal literals (numbers with leading zeros, such as 012) is not allowed.

"use strict";
var num = 012; // SyntaxError: Octal literals are not allowed in strict mode
Makes eval function and arguments non-reassignable:

The eval function and arguments are restricted in strict mode. For example, you can't assign values to them.

"use strict";
eval = 2; // Error: Assigning to eval is not allowed in strict mode
arguments = 3; // Error: Assigning to arguments is not allowed in strict mode

// Key Features of Strict Mode
// Strict mode modifies how JavaScript behaves in the following ways:

Prevents the use of undeclared variables:

Without strict mode, JavaScript allows you to create global variables by accident.
In strict mode, attempting to assign a value to an undeclared variable will throw an error.

//"use strict";
//x = 10; // Error: x is not defined
//Eliminates this coercion:

In non-strict mode, this in a function refers to the global object (window in browsers) when the function is called without a context.
In strict mode, this remains undefined when a function is called without a context (e.g., using call or apply).

"use strict";
function show() {
    console.log(this); // undefined in strict mode
}
show();

//Disallows the use of duplicate property names or parameters:
//In strict mode, defining an object with duplicate property names or a function with duplicate parameter names throws an error.
"use strict";
const obj = {a: 1, a: 2}; // Error: Duplicate data property in object literal
//Disallows writing to readonly properties:
//In strict mode, trying to assign a value to a constant or a non-writable property will throw an error.
"use strict";
const obj = {};
Object.defineProperty(obj, 'name', { value: 'John', writable: false });
obj.name = 'Doe'; // Error: Cannot assign to read-only property 'name'

//Benefits of Using Strict Mode
//Catches common mistakes: Strict mode makes it easier to catch errors, such as using undeclared variables or writing to read-only properties.
//Improves performance: JavaScript engines can optimize code more effectively in strict mode because it avoids certain error-prone features.
//Security: By eliminating dangerous features like with and making eval more predictable, strict mode improves security by avoiding potential vulnerabilities.
//Consistency: It helps ensure that your code behaves consistently, making it easier to debug and maintain.

//How to Enable Strict Mode
//Strict mode can be enabled in two ways:
//Globally: By adding the "use strict"; directive at the beginning of a JavaScript filed

"use strict";
// Code in strict mode
let x = 3.14; // Valid
Locally: By adding the "use strict"; directive inside a function to apply strict mode only within that function.
    
function example() {
    "use strict";
    let x = 3.14; // Valid in strict mode
}
//Key Features of Strict Mode
Strict mode modifies how JavaScript behaves in the following ways:
Prevents the use of undeclared variables:
Without strict mode, JavaScript allows you to create global variables by accident.
In strict mode, attempting to assign a value to an undeclared variable will throw an error.
    
"use strict";
x = 10; // Error: x is not defined
Eliminates this coercion:

In non-strict mode, this in a function refers to the global object (window in browsers) when the function is called without a context.
In strict mode, this remains undefined when a function is called without a context (e.g., using call or apply).
    
"use strict";
function show() {
    console.log(this); // undefined in strict mode
}
show();
//68.How do you declare strict mode:

//69.What is the purpose of double exclamation:

//The double exclamation mark (!!) in JavaScript is a technique used to convert a value to a boolean. It is essentially a shorthand for casting any value to a boolean (true or false), which is useful for evaluating the truthiness or falsiness of a value.
//How it works:
//The first ! (logical NOT) negates the value. It converts the value to a boolean and inverts it (i.e., true becomes false, and false becomes true).
//The second ! negates the result of the first !, effectively returning the boolean equivalent of the original value.

//70.What is the purpose of the delete operator:
//The delete operator in JavaScript is used to remove properties from an object.
//It can also be used to remove elements from arrays when they are accessed by their index, but it leaves a hole (i.e., undefined at that index) rather than actually shifting elements.

//Purpose of the delete Operator:
//Removing object properties: The primary use of the delete operator is to remove a property from an object. After deletion, the property will no longer exist on the object, and attempting to access it will return undefined.
let person = {
    name: "John",
    age: 30
};

delete person.age;  // Deletes the "age" property

console.log(person.age);  // undefined
console.log(person);  // { name: "John" }
//Deleting array elements: You can use the delete operator to remove an element from an array, but it does not actually remove the element from the array—rather, it leaves a "hole" at that index (the element is removed, but the array length remains the same, and the slot is set to undefined).
let numbers = [1, 2, 3, 4];
delete numbers[2];  // Deletes the element at index 2
console.log(numbers);  // [ 1, 2, <1 empty item>, 4 ]
console.log(numbers.length);  // 4 (array length remains the same)
//Note: It is generally not recommended to use delete on arrays. Instead, you might want to use methods like splice() to actually remove the element and reindex the array.

//71.type of operator:

//The typeof operator in JavaScript is used to determine the type of a given variable or expression. 
//It returns a string that represents the type of the operand (e.g., "string", "number", "object", etc.).

// Example 1: Checking primitive types
console.log(typeof "Hello");  // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof Symbol());  // "symbol"
console.log(typeof 9007199254740991n);  // "bigint"

// Example 2: Checking non-primitive types
console.log(typeof { name: "Alice", age: 25 });  // "object"
console.log(typeof [1, 2, 3]);  // "object" (arrays are objects in JavaScript)
console.log(typeof null);  // "object" (this is a known JavaScript quirk)

// Example 3: Checking a function
console.log(typeof function(){});  // "function"

//72.undefine property:
//In JavaScript, an undefined property refers to a property that does not exist on an object or has not been assigned a value. When you attempt to access such a property, JavaScript will return undefined.

//Key Points about Undefined Properties:
//Non-existent properties: If you try to access a property on an object that hasn't been defined, it will return undefined.

const person = {
    name: "John",
    age: 30
};

console.log(person.address);  // undefined: 'address' property doesn't exist
Properties with no assigned value: If you define a property on an object but don't assign a value to it, it will have an undefined value.


const person = {
    name: "John",
    age: 30,
    address: undefined  // Explicitly setting the property to undefined
};

console.log(person.address);  // undefined

//73.null value:
Undefined vs Null:

undefined is a type and value in JavaScript, representing the absence of a value or an uninitialized state.
null is a distinct value representing "no value" or "empty object reference." They are different in meaning and usage.

let x;        // x is declared but not assigned, so it's undefined
let y = null; // y is explicitly set to null
console.log(x);  // undefined
console.log(y);  // null


//74.difference between the null and undefined:

//75.eval :
what is eval:
Summary:
eval() allows you to execute JavaScript code represented as a string.
It can be useful but poses security risks, performance drawbacks, and debugging challenges.
Avoid using eval() when possible, especially with untrusted input. Use safer alternatives like JSON.parse() or the Function constructor for dynamically executed code.

    //76.what is differnce between the window and documents:
    Key Differences:
Feature              	window	                                               document
Represents            	The browser window or tab itself	                    The content (HTML) of the web page
Scope	                Global scope, accessible anywhere in the script	        Represents the DOM, which is a part of window
Purpose	               Handles global browser environment features             	Manipulates the structure and content of the webpage
Example Access         	window.location, window.alert()	                         document.getElementById(), document.body
Global Object	The global context for JavaScript in the browser	A part of the window object, used for DOM manipulation
Examples of Use	Controlling the browser window, accessing global properties like screen size, setting timeouts	Accessing or modifying HTML elements, reading the title of the page
