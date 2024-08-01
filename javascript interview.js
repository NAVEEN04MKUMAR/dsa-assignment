1.


coercion:we convert one data type to another

a)undefined
const result=undefined/10;
console.log(result);
//o/p:
//if we do any operationwith the undefined we got the Nan as the o/p
//NaN

b)null
const result=null+10;
console.log(result);
//o/p:10
//here null is considered as the 0 

c)boolean
const num1=true+10;
const num2=false+10;
console.log(num1,num2);
//true as considered as the 1 and false as the considered as the 0

d)string to number:
js convert string to number if not valid number then it is the NaN

const str1='123';
const str2='abc';

const num1=Number(str1);
const num2=Number(str2);

console.log(num1);
console.log(num2);

o/p:
123
NaN

B)string:
//sequence of characters,represent for text,it may be single quoted or double quoted

//a)simgle quote
let str='i am very soon billionere';
console.log(str);

//b)double quote
let str2="i am very soon trillionere";
console.log(str2);

//c)string constructor:
let str3=new String('no matter what happened i achive my dream');
console.log(str3);


//d)dynamic string creation:
let str='template literal string';
let newstr=`string created using ${str}`;
console.log(newstr);


//e)assigning the empty string with single or double quote
let str2='';
let newstr2="";
console.log(str2);
console.log(newstr2);

//f)create the multi line strings
let str4=`
          very 
            soon
             i placed
                beautiful company
                   in the world`;

   console.log(str4);


  //g)basic operation of strings:
let str='NAVEENKUMAR';
let len=str.length;
console.log(len);

//h)concate the string
let str2='NAVEEN';
let str3='KUMAR';
let result=str2+str3;
console.log(result);

//i)escape the characters
let str4="\'M\'NAVEEN";
let str5="\"M\" KUMAR";
let str6="\\M\\ KUMAR";
console.log(str4,str5,str6);

//j)backslash will helpful to break the single line of code into the multiple lines of code
const str7="very soon get the \
millionare job";
console.log(str7);

//k)addition + will helpful to break the single line of code into the multiple lines of code
const str8="very soon get the" +
"millionare job";
console.log(str7);

//l)get the sub string
let str='very soon placed in the great startup in the world';
let substr=str.substring(24,37);
console.log(substr);

//m)get the upper case and lowercase
let str2='very soon placed in the great startup in the world';
let upper=str2.toUpperCase();
let lower=str2.toLowerCase();
console.log(upper);
console.log(lower);

//o)trimming
let str4='          very soon placed in the great startup in the world';
let trim=str4.trim();
console.log(trim);

//p)replacemet
let str5='very soon placed in the great startup in the world';
let newstr=str5.replace('very soon','now');
console.log(newstr);

//q)we get the charecter from giving index
function func(){
    let str="beautiful naveen";
    let ltr=str.charAt(0);
    console.log(ltr);
    let ltr2=str.charAt(10);
    console.log(ltr2);
    let ltr3=str.charAt(100);
    console.log(ltr3);//o/p:retuern empty string

}
func()

//r)local compare
//+ve num if lexicographically>compare string
//-ve num if lexicographically<compare string
//0 num if lexicographically=compare string

let str6="mech";
let str7="cse";
let result=str6.localeCompare(str7);
console.log(result);
//o/p return 1  c come after m

let str8="cse";
let str9="mech";
let result2=str8.localeCompare(str9);
console.log(result2);
//o/p resturn -1   m com after c

let str10="cse";
let str11="cse";
let result3=str10.localeCompare(str11);
console.log(result3);
//o/p resturn 1

//s)passing javascript string as the object
let str12=new String("Navenn kumar mmost valuable person in te world");
console.log(str12);


//C)Boolean

//false:0,Nan,empty string,undefined,null
//true:object,other than

//everything is true
console.log(Boolean(10));
console.log(Boolean(2.74));
console.log(Boolean(1<2));
console.log(Boolean(3*2+1));
console.log(Boolean('true'));
console.log(Boolean('false'));
console.log(Boolean("Naveenkumar"));

//everything is false
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(1>2));

//about symbol data types:
//symbol we can create the unique identifier 
const sym1=Symbol('description');
const sym2=Symbol('descriptio');
console.log(sym1===sym2);

//avaoid the name collisions when interact with the objects,avoid interface
const mysymbol=Symbol('mysymbol');
const obj={
    [mysymbol]:'some value'
};
console.log(obj[mysymbol]);


//UNDEFINED
//application:object property exist before accessing it
//application:uninitialised variables during debugging
//undefined data type where the variable is declared then value not assigned
let newvar;
console.log(newvar);
//o/p:undefined


//we got the undefined when function are not return the any value
function sayhi(name){
    console.log(`hi ${name}`)
}
x=sayhi('hike');

console.log(`value in x=${x}`);
//o/p:hi hike
//value in x=undefined

//if we access the property which does not have 
//inside the object then we assign them for the undefined
const object={name:"naveen",age:"24"};
console.log(object.salary);

//NULL
//null represent the absense of any object value
class Square{
    constructor(length){
        this.length=length;
    }
    static craetesquare(length){
        return length>0? new Square(length):null;
    }
}

const square1=Square.craetesquare(10);
const square2=Square.craetesquare(100);
const square3=Square.craetesquare();

console.log(square1);
console.log(square2);
console.log(square3);

// o/p
// Square { length: 10 }
// Square { length: 100 }
// null


//ex:
const myvalue=null;
if(myvalue){
    console.log("not null");

}else{
    console.log("null");
}
//o/p:null

//Objects in Javascript
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }

//ex
// JavaScript code demonstrating a simple object
let school = {
    name: 'Vivekananda School',
    location: 'Delhi',
    established: '1971',
    displayInfo: function () {
        console.log(`${school.name} was established 
              in ${school.established} at ${school.location}`);
    }
}
school.displayInfo(); 
//Vivekananda School was established in 1971 at Delhi

//ex:
//Bracket notation 
let school = {
    name: 'Vivekananda School',
    displayInfo: function () {
        console.log(`${school.name.split(' ')[0]}`);
    }
}
school.displayInfo(); // Vivekananda

//Inherited Propertie
let school = {
    "name": "Vivekananda School"
};
console.log(school.hasOwnProperty("name")); 
console.log(school.hasOwnProperty("toString"));
//o/p:
//true
//false



//Accessing object members

let person = {
    name: "John"
};
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
});
//o/p:
//Vivekanada
//1971

//Iterating all over the keys
let person = {
    gender: "male"
}

let person1 = Object.create(person);
person1.name = "Adam";
person1.age = 45;
person1.nationality = "Australian";

for (let key in person1) {
    // Output : name, age, nationality 
    // and gender
    console.log(key);
}          
//output
name
age
nationality
gender



//Deleting Properties
let obj1 = { 
    propfirst : "Name"
} 

// Output : Name 
console.log(obj1.propfirst); 
delete obj1.propfirst 

// Output : undefined 
console.log(obj1.propfirst); 

//o/p
//Name
//undefined






3.Comments in javascript:
//single line comment

/*
multiline comment
*/ 


4.what will happened if 2+4+"7"
2 and 4 we got the addition then then 6+"7" then concatinate the value 67 

5.about NaN:
verify this one we are not pass the value of the not a number,if not a number we got true else false

6.javascript and ASP script:
speed of js>speed of ASP script
because js is the client side code so it will not depend on the server side code
ASP script is the server side sciripting language always is depend on the server

7.Negative value:

8.creation of js is the netscape (1995)

9.break the code in the multiple line this one 
console.log("Aonline computer science portal \n for geeks");

10.undeclared:when we try to access any variable which is not initialise  earlier using var and constkeyword





