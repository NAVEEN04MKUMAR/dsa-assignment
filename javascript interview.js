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

//get the sub string
let str='very soon placed in the great startup in the world';
let substr=str.substring(24,37);
console.log(substr);

//get the upper case and lowercase
let str2='very soon placed in the great startup in the world';
let upper=str2.toUpperCase();
let lower=str2.toLowerCase();
console.log(upper);
console.log(lower);

//string search
let str3='very soon placed in the great startup in the world';
let searchstr=str3.indexOf('great startup');
console.log(searchstr);

//trimming
let str4='          very soon placed in the great startup in the world';
let trim=str4.trim();
console.log(trim);

//replacemet
let str5='very soon placed in the great startup in the world';
let newstr=str5.replace('very soon','now');
console.log(newstr);






