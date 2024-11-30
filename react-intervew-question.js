//difference between the HTML AND XML
//class vs classname
//HTML
<div class="my-class"></div>
//XML classname instead of class
<div className="my-class"></div>

//Self-Closing Tags:
//HTML
<img src="img.jpg"></img>
//XML self closing tag
<img src="img.jpg"/>

//CamelCase for Inline Styles:
//HTML
<div style="background-color:red"></div>
//XML classname instead of class 
<div  style={{backgroundColor:'red'}}></div>

//Boolean Attributes:
//HTML
<input type="checkbox" chceked></input>
//XML
<input type="checkbox" checked={true}/>



//difference between the unidirectional flow and bidirectionflow
//unidirection:
//parant comoponent holds the state and props down to child componentsToColor,
//changes in the child componentdo not affect the parant component directly



Unidirection parant
import React from 'react';
import Childcomponent from './Unidirection-child';

function Parantcomponent(){
    const message="hello from the server";
    return (
        <div>
            <h1>
                Parant component
            </h1>
            <Childcomponent message={message}/>
        </div>
    )
}


export default Parantcomponent;




// import { message } from 'antd';
import React from 'react';


function Childcomponent({message}){
    return (
        <div>
            <h1>
                Child component
            </h1>
            <p>Received message:{message}</p>
        </div>
    )
}


export default Childcomponent;




we can change te stage from parant to chld and child to parant

//Bidirection
import React, { useState } from 'react';
import Childcomponent from './Bidirection-child.jsx';

function Parantcomponent1(){
    const [inputvalue,setinputvalue]=useState('');

    return (
        <div>
            <h1>
                Parant component {inputvalue}
            </h1>
            <Childcomponent inputvalue={inputvalue} setinputvalue={setinputvalue}/>
        </div>
    )
}


export default Parantcomponent1;



bidirection child.jsx


// import { message } from 'antd';
import React from 'react';


function Childcomponent({inputvalue,setinputvalue}){
    return (
        <div>
            <h1>
                Child component
            </h1>
            <input type="text" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}/>
        </div>
    )
}


export default Childcomponent;





//Composable component

//Parant component
import React, { Children } from 'react';
import Inputfield from './Input-field';
import Submitbutton from './Submitbutton';

//composable component allow our breakcode into the smaller pieces can be reused and recombined
//form is composes all the smaller component to make it complex UI
function Form(){
    return (
        <form>
        <Inputfield label="Name:" name="name"/>
        <Inputfield label="Email:" type="email" name="email"/>
        <Submitbutton>Submit</Submitbutton>
        </form>
    )
}


export default Form;

//Child 1:
import React from 'react';


function Inputfield({label,type='text',...rest}){
    return (
        <div>
            <label>
               {label}
                Child component
                <input type={type}  {...rest}/>
            </label>
        </div>
    )
}



export default Inputfield;

import React, { Children } from 'react';


function Submitbutton({children,...rest}){
    return (
        <button type="submit" {...rest}>
         {children}
        </button>
    )
}


export default Submitbutton;







//Reusable child
import React from 'react';

function Reusablebutton({onClick,children,style,className}){
    return (
        <button onClick={onClick} style={style} className={className}>
         {children}
        </button>
    )
}
export default  Reusablebutton;



// import { Color } from "fabric";
import Reusablebutton from "./Reusable-parant";
function Main({children,...rest}){
    return (
        <div>
            <Reusablebutton
                onClick={()=>alert('button 1 clicked')}
                style={{backgroundColor:'blue',color:'white'}}
                >
             Button 1
           </Reusablebutton>
            <Reusablebutton
            onClick={()=>alert('button 2 clicked')}
            style={{backgroundColor:'green',color:'white'}}               
            > 
            Button2
            </Reusablebutton>
            <Reusablebutton
            onClick={()=>alert('button 3 clicked')}
            style={{backgroundColor:'red',color:'white'}}               
            > 
                        Button 3    

            </Reusablebutton>
        </div>
    )
}
export default Main;


//jsx is the javascript syntex extension
//it provides the synthetic sugar to 
//React.createElement(type,props,...childern)

export default function JSX(){
    return <h1 className="greeting">{"hello this is jsx code"}</h1>;
}

//if we dont use the jsx then 
import { createElement } from "react";

export default function App() {
  return createElement(
    "h1",
    { className: "greeting" },
    "Hello, this is a JSX Code!"
  );
}


//5.Difference between the Element and Component:

//Element is a plain objct describing what you want 
//to appear on the screen in terms of the DOM nodes

//created by jsx and React.crateElement() method
//example:
<div>Hello!</div>
//if javascript
const element=React.createElement("div",{id:"login-btn"},"login");
//if jsx
<div id="login-btn">Login</div>

//above o/p look like
{
    type:'div',
    props:{
        Children,
        id:'login-btn'
    }
}
//usage:it is the building block used inside the components

//Component: it is class with the render() method
//or defined as te function
//return a react element or jsx

//it is bulding block of any react application it is manages own stateor props

//if we assign the element at the js file


function Mycomponent(){
    return <div>Hello,Component</div>;
}
//if i want to render
<Mycomponent/>

const Button1=({handlelogin})=>(
    <div id={"login-btn"} onClick={handlelogin}>
        Login
    </div>
);


//if we assign the element at the jsx file

const Button2=({handlelogin})=>React.createElement(
    "div",
    {id:"login-btn",onClick:handlelogin},
    "Login"
);



//create the Component:

//using function
function functionname(){
    return(
        <h1>hello</h1>
    );
}


//using class
class classname extends Component{
    render(){
    return(
        <h1>hello</h1>
    );
  }
}


//using useState
function functionname(){
    const [count,setcount]=useState(0);
    return(
        <div>
        <p>you clicked {count} times</p>
        <h1>hello</h1>
        <button onClick={()=>setcount(count+1)}>
click me
        </button>
        </div>
    );
}











//using class over teh Function if it is reqyired the old third party library
If you need to manage state or use lifecycle methods.
import React,{ Component } from "react"

//using useState
class Classname extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }
    
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }

    componentDidUpdate(){
        document.title=`clicked ${this.state.count} times`
    }
handleclick=()=>{
    this.setState({count:this.state.count+1});
}


    render(){
    return(
        <div>
        <p>you clicked {this.state.count} times</p>
        <button onClick={this.handleclick}>
click me
        </button>
        </div>
    );
  }
}
 export default Classname;






//memo if we want to avoid the re-render it will helpfull
//same output will get if we hav the same state and props
//wrapping will helpful to avoid th rerender 
//function will not reset to the previous state to the current state

import {memo,useState} from 'react';

const Employeeprofile=memo(function employeeprofile({name,email}){
    return(
        <>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        </>
    );
});


export default function Employeeform(){

    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    return(
    <>
    <label>
        Name:{" "}
        <input value={name} onChange={(e)=>setname(e.target.value)}/>
    </label>

    <label>
    Email:{" "}
        <input value={email} onChange={(e)=>setemail(e.target.value)}/>
    </label>
    <hr/>
    <Employeeprofile name={name} email={email}/>
    </>

)
};

9.about state:it means like ist is the component the we store some information that will change over time 
differance between the it is private and fully controlled by the component
will not access to any one because it is like the  till the owner component decides to pass it

10.state and props:
import React from "react";
import ReactDOM from "react-dom";

const Childcomponent=(props)=>{
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.gender}</p>
        </div>
    )
};



 const Parantcomponent=()=>{
    return(
        <div>
<Childcomponent name="naveen" age="34" gender="male"/>
<Childcomponent name="kumar" age="25" gender="male"/>
        </div>
    )
};


export default Parantcomponent;

11.state:managed by the component itself,can be updated using setstate
it is changes in the state trigger a re-render f the component and its childern

props:
properties are the parant component to childrebn are read only
used ti pass the data between componente
heer coponent is reusable with the usage of props 

//12.event handling:

//in html
 <button onclick="activatelasers()"></button>

//in react
<button onClick={activatelasrs}/> 



//to avaoid default behavior
//hteml we put the falsee
 <a 
href="#"
onclick='cconsole.log("the link was clicked");return false;'
/> 



reat we put the prevendefault
function handleclick(event){
    event.preventDefault();
    console.log("the link wa clicked");
}



//about sytheti event
prevent the default action event
it will helpful to wrap around the native DOM events
providing consisting interface for event handling across differet platform and browser
import React from "react";
import ReactDOM from "react-dom";


 const Mycomponent=()=>{
    function handleclick(event){
     console.log('input',event);
     console.log('input',event.target.value);

     const nativeevent=event.nativeElement;
     console.log(nativeevent);
     event.stopPropagation();
     event.preventDefault();
    }
    return <input name="title" onChange={handleclick}/> 
};



export default Mycomponent;





// //inline conditional expression

//it is represent the ternary condition 
<h1>hello</h1>
{
    messages.length>0&&islogin?(
<h2>ypu have {messages.length} unread message</h2>
    ):(
<h2> you dont have the unread message</h2>
    );
}

//key is a special attibute include when mapping over arrays to render data
//key props help to idenify the what addedd or removed

const todoitems=todo.map((todo,index)=>{
    <li key={index}>{todo.text}</li>
})

//don't use if it is the 



#16:
virtual dom:
it is memorty ligght weiht represation of the actual DOM
when changes occured at the time changes will not occured at the directly to the dom then
virtual dom created then first changes occured then compare wit the dom whatver 
minimal changes reqyuird then we will put them   


17)virtual dom how it is works:
1)if we change anything then entire ui is re-render in v-dom
2)only the difference between the previous dom  representation and new one is calculated
3)once calculation i don't then real dom will updated



//18)shadow dom:
purpose:it is the isolatio of component logic 
ensure that components ar self-containded and do not interfare with the rest of element 
use case:it helpful to reusable component
rendering :
encapsulate the wn dom tree  which is separate from the document dom 

//18)vittual dom:
purpose:prrfomance optimasation for the dom in  react
use case:helpful t manage the ui updates
render:memory representation of entire dom real dom only updated with diff


//19)react fiber:
//it will solve the propblem related to responsive name and updating user interface
//it will make the react as the taskmore small taks it will help to heavy updats
//it can pause work,switch between tasks or discard work

import React,{useState} from 'react';
const Fiber=()=>{
    const [count,setcount]=useState(0);
    const [items,setitems]=useState(Array.from({ length: 2000 }, (_, i) => i));
const updatedlist=()=>{
    setitems(items.map((item)=>item+1));
}
const incrementcounter=()=>{
    setcount(count+1);
}

    return(
        <div>
            <h3>
                react fiber
            </h3>
            <div>
                  <button onClick={updatedlist}>updated heavy list</button>
           </div>

           <div>
                  <button onClick={incrementcounter}>increment counter{count}</button>
           </div>

               <div>
                <ul>
                {items.map((item)=>(
                    <li key={item}>
                        {item}
                    </li>
                ))}
                 </ul>
                </div>
            
                </div>
    );
 };


 export default Fiber;

//before:if we increment the updated list then it will take like the
//it will freese then block the increament by user 


20.main goal of the react fiber:

it can split our work interruble work into chunks
ability to prioritise,reuse work 
better support for error boundarie






// //31.Fragment
// //is the light weight process adding element without adding the any extra node to theDOM tree
// //uer input the repository name and description
// import React from "react";
// const Fragment=()=>{
//     return (
//         // <React.Fragment>
//         //     <h1>Hiii</h1>
//         // </React.Fragment>
//         <>
//         <h1>Hii</h1>
//         </>
//     )
// }
// export default  Fragment;

import { Component } from "react"


// //32.why fragment not div:
// //it is the  have the less cluster to have the clean one 
// //it is run the css very quickly





// //33. React Portal:
// //Modals are placed the outside of the parant compnent hierarchy to avoind the layout issue or to ensure they rendered on top of the element in ui
// //normal react render inside the dom
// //explicitly specify the dom node render the content
// import React,{useState} from "react";
// import ReactDOM from 'react-dom';

// const Modal=(isopen,onclose)=>{

//     if(!isopen) return true;

//     return ReactDOM.createPortal(
//      <div>
//         <h1>I am modal</h1>
//         <button onClick={onclose}>close</button>
//      </div>,
//      document.getElementById('modal-root')
//     );
  
 
// }

// const Portal=()=>{
//     const [ismodelopen,setismodelopen]=useState(false);

//     const openmodal=()=>setismodelopen(true);
//     const closemodal=()=>setismodelopen(false);

//     return (
//      <div>
//         <h1>Portal</h1>
//         <button onClick={openmodal}>open modal</button>
//         <Modal isOpen={ismodelopen} onClose={closemodal}></Modal>
//      </div>
//     )
  
 
// }

// export default  Portal;



// //34.state component:
// //  state:maintain and manages its own internal state
// //this willl change over time  such as the input
// import React,{useState} from "react";

// const State=()=>{
//     const [count,setcounter]=useState(0);

//     const increment=()=>setcounter(count+1);

//     return (
//      <div>
//         <h1>Counter:{count}</h1>
//         <button onClick={increment}>Increment</button>
//      </div>
//     )
  
 
// }


// export default State;

// //35.stateless:
// //do not maintain the any internal state
// //primaryly used for the ui:

// import React from 'react';

// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// export default Greeting;



// //36.proptypes:PropTypes, a built-in feature of React that allows you to specify the expected types and structure of the props a component should receive
// import React,{useState} from "react";
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

// const Fragment=({name,age,isActive,id})=>{
//     return (
//      <div>
//         <h1>Name:{name}</h1>
//         <p>Age:{age}</p>
//         <p>Status:{isActive?'Active':'Inactive'}</p>
//         <p>Id:{id}</p>

//      </div>
//     )
  
 
// }


// Fragment.proptypes={
//     name:PropTypes.string.isRequired,
//     age:PropTypes.number.isRequired,
//     isActive:PropTypes.bool.isRequired,
//     id:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
// }


// export default  Fragment;

//37.advantags of react:

//increase tyhe application performance
//JSX code easy to read and write
//render the both side of the client and the serverside(next.js) rendering
//react uses the unidirectional data flow
//if we extend the react native then what are the lanuage we will learn then same one will help to get the do ios and android project 

//38.disadvantages of react:
//it is not full framework it is just view library
//code complexity increase with the JSX
//to many small compennet we have that is for the boilr plate
//writing the jsx file will be difficult

//39.static types:
//it is ensure the that the types of variables,props,and state are correct at compile time(before code executed)
//for the javascript we have the typescript largecodebases and small we have the proptypes
//proptypes verify at the run time
//

//40.use of the react-dom:

//render the react component to DOM
//it can helpful to reder at he server side

//1.reactDOM.render:helpful to the render the react into dom
//2.reactDOM.createRoot:better performance optimization
//3.reactDom.hydrate():used for the server side render,it will put the intially html into the clientside
//4.findDOMNode():return the corresponding node for the given react
//5.reactDOM.createPortal():we can render at the diff part of the DOM tree (outside of the parant component)





// console.log("Try programiz.pro");

// //palindrome  a given Node when a node is given.
// // 
// class Node {
//     constructor(val){
//     this.val=val;
//     this.next=null
//     }
// }


// function startingnode(head){
//     let slow=head;
//     let fast=head;
    
//     while(fast!==null&&fast.next!==null){
        
//         slow=slow.next;
//         fast=fast.next.next;
//         if(slow===fast){
//          slow=head;
//          while(slow!==fast){
//              slow=slow.next;
//              fast=fast.next
//          }
         
//          return slow;
//         }
//     }
    

//     return null;
    
// }





// function printLinkedList(head) {
//   let temp = head;
//   while (temp !== null) {
//     process.stdout.write(temp.val + ' ');
//     temp = temp.next;
//   }
//   console.log();
// }

// const head1 = new Node(1);
// head1.next = new Node(2);
// head1.next.next = new Node(3);
// head1.next.next.next = new Node(4);
// head1.next.next.next.next = new Node(5);
// head1.next.next.next.next.next = new Node(6);
// head1.next.next.next.next.next.next= head1.next.next.next.next.next;

// process.stdout.write('Original Linked List: ');
// // printLinkedList(head1);

// const result= startingnode(head1);
// console.log(result);

// if (result) {
//     console.log("Cycle starts at node with value:", result.val);  // Print the value of the starting node of the cycle
// } else {
//     console.log("No cycle detected.");
// }


// // const resulta=
// // deletenode(result);
// // // console.log(resulta)

// process.stdout.write('palindrome node Linked List: ');
// printLinkedList(head1);
// // printLinkedList(resulta);

// //Time Complexity: O( N) This is because we traverse the linked list  

// //Space Complexity: O(1) 





// console.log("Try programiz.pro");

// //palindrome  a given Node when a node is given.
// // 
// class Node {
//     constructor(val){
//     this.val=val;
//     this.next=null
//     }
// }


// function startingnode(head){
//     let temp=head;
//     let map=new Map();
    
//     while(temp!==null){
        
//         if(map.has(temp)){
//             return temp; 
//         }
//         map.set(temp,true);
//         temp=temp.next;
//     }
//     return null;
    
// }





// function printLinkedList(head) {
//   let temp = head;
//   while (temp !== null) {
//     process.stdout.write(temp.val + ' ');
//     temp = temp.next;
//   }
//   console.log();
// }

// const head1 = new Node(1);
// head1.next = new Node(2);
// head1.next.next = new Node(3);
// head1.next.next.next = new Node(4);
// head1.next.next.next.next = new Node(5);
// head1.next.next.next.next.next = new Node(6);
// head1.next.next.next.next.next.next= head1.next.next.next.next.next;

// process.stdout.write('Original Linked List: ');
// // printLinkedList(head1);

// const result= startingnode(head1);
// console.log(result);

// if (result) {
//     console.log("Cycle starts at node with value:", result.val);  // Print the value of the starting node of the cycle
// } else {
//     console.log("No cycle detected.");
// }


// // const resulta=
// // deletenode(result);
// // // console.log(resulta)

// process.stdout.write('palindrome node Linked List: ');
// printLinkedList(head1);
// // printLinkedList(resulta);

// //Time Complexity: O( N) This is because we traverse the linked list  

// //Space Complexity: O(N) We use a map to store the values of the linked list








// //palindrome  a given Node when a node is given.
// // 
// class Node {
//     constructor(val){
//     this.val=val;
//     this.next=null
//     }
// }


// function reverselist(head){
//     let temp=head;
//     let prev=null;
    
//     while(temp!==null){
        
//         let first=temp.next;
//         temp.next=prev;
//         prev=temp;
//         temp=first;
        
//     }
//     return prev;
    
// }


// function palindrome(head){
    
//      if (head === null || head.next === null) {
//         // It's a palindrome by definition
//         return true;
//     }
    
    
//     let slow=head;
//     let fast=head;
//     //find the middle node using slow pointer
//     while(fast.next!==null&&fast.next.next!==null){

//     slow=slow.next;
//     fast=fast.next.next;
//     }
    
//     let newhead=reverselist(slow.next);
    
//     let first=head;
//     let second=newhead;
    
//     //using head of 1st half and the 2nd half we are compare the data of the linked list
//     while(second!==null){
        
//         if(first.val!==second.val){
//             reverselist(newhead);
//             return false;
//         }
//       first=first.next;
//       second=second.next;
//     }
    
//       reverselist(newhead);
//         return true;
// }



// function printLinkedList(head) {
//   let temp = head;
//   while (temp !== null) {
//     process.stdout.write(temp.val + ' ');
//     temp = temp.next;
//   }
//   console.log();
// }

// const head1 = new Node(1);
// head1.next = new Node(2);
// head1.next.next = new Node(3);
// head1.next.next.next = new Node(4);
// head1.next.next.next.next = new Node(6);
// head1.next.next.next.next.next = new Node(2);
// head1.next.next.next.next.next.next = new Node(1);

// process.stdout.write('Original Linked List: ');
// printLinkedList(head1);

// const result=palindrome(head1);
// console.log(result)

// // const resulta=
// // deletenode(result);
// // // console.log(resulta)

// process.stdout.write('palindrome node Linked List: ');
// printLinkedList(head1);
// // printLinkedList(resulta);

// //Time Complexity: O(2 * N) 1st we traverse using the N/2 and N/2 by the slow and fast pointe,again we verify the 1st half and the 2nd half for the compare the value

// //Space Complexity: O(1) 










	
// //palindrome  a given Node when a node is given.
// // 
// class Node {
//     constructor(val){
//     this.val=val;
//     this.next=null
//     }
// }


// function palindrome(head){
    
    
//     let stack=[];
//     let temp=head;
//   //push the node to stack  
//     while(temp!==null){
//         stack.push(temp.data);
//         temp=temp.next;
//             // console.log(temp);

//     }
    
//     //compare the value of the stack with the linkedlist
//     temp=head;
//     while(temp!==null){
//         if(temp.val!==stack.pop()){
//             return false;
//         }
//         temp=temp.next;
//     }
//      return true;
    
// }



// function printLinkedList(head) {
//   let temp = head;
//   while (temp !== null) {
//     process.stdout.write(temp.val + ' ');
//     temp = temp.next;
//   }
//   console.log();
// }

// const head1 = new Node(1);
// head1.next = new Node(2);
// head1.next.next = new Node(3);
// head1.next.next.next = new Node(4);
// head1.next.next.next.next = new Node(3);
// head1.next.next.next.next.next = new Node(2);
// head1.next.next.next.next.next.next = new Node(9);

// process.stdout.write('Original Linked List: ');
// printLinkedList(head1);

// const result=palindrome(head1);
// console.log(result)

// // const resulta=
// // deletenode(result);
// // // console.log(resulta)

// process.stdout.write('palindrome node Linked List: ');
// printLinkedList(head1);
// // printLinkedList(resulta);

// //Time Complexity: O(2 * N) This is because we traverse the linked list twice: once to push the values onto the stack, and once to pop the values and compare with the linked list. 

// //Space Complexity: O(N) We use a stack to store the values of the linked list


//41.react ssr:

//1)client request the page
//2)express server receive the request
//3)react render componentserver //reactserver.renderToString()
//4)server the reads the content from HTML THEN insert the placeholder
//5)server send the HTML to client
//6)client receive the HTML and rnder content
//7)react hydrates the html and make the page interactive
//8)client navifgation and the react updates

//42.INNERHTML:
//we insert the raw HTML into the DOM ,IT is unsafe for the expose the security concerncross-site-scripting

// import React from 'react';

// const MyComponent = () => {
//   const htmlContent = '<h1>This is a heading</h1><p>This is a paragraph of text.</p>';

//   return (
//     <div>
//       <h2>React Component with Raw HTML:</h2>
//       <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//     </div>
//   );
// };

// export default MyComponent;


//43.insert the css in react:

//where the it is accept the object 
// import React from "react";
// const MyComponent=()=>{

// const divstyle={
// backgroundColor:'lightblue',
// paddding:'20px',
// fontSize:'18px'
// };

//     return <div style={divstyle}>this is the styled div using the inline style</div>
// };
// export default MyComponent;


//44.React event different from HTML and javascript:
//1)we use the camelcase for the reacta and lowercase for the normal one 
//<button onClick={handleclick}>Click me</button>
//  for native we use the onclick and onnouseover

//2)evethandling:(function)

//in react we pass the function referance to the eventhandler

// const handleclick=()=>{
//     alert('button clicked');
// }
// return <button onClick={handleclick}>click me</button>

// //native dom:
// <button onclick="alert('button clicked)">click me</button>



// //45.impact of index as keys:
// //using of the index of array as the keywhen rendring list of element

// const items=["naveen","kumar","family"];
// const list=items.map((item,index)=>{
// <li key={index}>{item}</li>
// });
// //dynamic changes:
// //reordering:if you reorder the list index based key will change,but actual item will not
// //performance issue will rise because of the wheen we add the component and remoe the component it will take the more nuber of time it will rerender

// //best practice:
// const items=[{id:1,name:"naveen"},{id:2,name:"kumar"},{id:3,name:"family"}];
// const list=items.map((item,index)=>{
// <li key={index.id}>{item.name}</li>
// });


// //46.conditional based rendering:

// //using the if/else:

// function isgreeting({isloggedin}){
//     if(isloggedin){
// return <h1>welcome</h1>
//     }else{
//         return <h1>please sign in</h1>
//     }
// }
// //using the 
// function isgreeting({isloggedin}){
// return(
//     <h1>
//         {isloggedin?'welcomeback':'please login'}
//     </h1>
// )
// }
// //using the and operator
// function isgreeting({isloggedin}){
//     return(
//         <h1>
//             {isloggedin&&<h1>welcome back</h1>}
//             {!isloggedin&&<h1>please sign in</h1>}
//         </h1>
//     )
//     }


//     //47.why it is risk using the prop by spread operator::
//     //a)we are pass the non valid DOM from the prop it show invalid error:


//     function button(props){
//         return <button {...props}>Click me</button>
//     }
//     const props={
//         className:'btn-primary',
//         onClick()=>alert('clicked');
//         customProp:'not-a-dom-attribute'
        
//     };
// //note here customprop is not the valid dom so it show the error
// //b)overwrite the existing props:
// function Button({label},onClick,...props){
//     return <button {...props} onClick={onClick}>{label}</button>
// }
// //note:here we are pass the props as the onClick but again we override the onClick

// //c)while debug it show the difficulties when we have the props contain the multiple place we have to verify

// //solution:

// function button({label,onClick,...props}){
//  const {customprop,...domprop}=props;
//     return <button {...domprop}>Click me</button>
// }

// //use the explicitely defined:
// function Button({label,onClick}){
//     return <button onClick={onClick}>{label}</button>
// }

//48.memoizing a component means the cahing the result of componenet rendering
//it mean if we receive the same props then there eis no need to re-render unless the props change

// function Mycomponent=({label,onClick})=>{
//     return (
//         <div>
//         <h1>{name}</h1>
//         <p>Age:{Age}</p>
//         </div>
//     );
// };
// const memocomponent=React.memo(Mycomponent);
// export default memocomponent;

// //react.memo:it have the pure component(it is for the same props for the same output)

// const MyComponent = React.memo(
//     ({ name, age }) => {
//         console.log('Rendering MyComponent');
//         return (
//           <div>
//             <h1>{name}</h1>
//             <p>Age: {age}</p>
//           </div>
//         );
//       },
//       (prevProps, nextProps) => {
//         // Only re-render if "age" has changed
//         return prevProps.age === nextProps.age;
//       }
//     );
    
//     export default MyComponent;
//     //for above one Child will not re-render because value remain same
//     //twist:if we use the memo concept still it will change if same prop with the non primitive data type like the object etc
    
//     const MyComponent = React.memo(({ data }) => {
//   console.log('Component rendered');
//   return <div>{data}</div>;
// });

// const Parent = () => {
//   const [count, setCount] = useState(0);
//   const data = { key: 'value' }; // New object reference each time
//   return (
//     <div>
//       <MyComponent data={data} />
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };
// //for this one still prop is same but it will re-render because of he non primitative data type


//51.Hooks are better then the props and Highr orer component:
//1)hooks vs the renderprops:

//render props:
//a pattern where a component accepsts a function as a props ,return <JSX></JSX>


// function Mousetracker({ render }) {
//     const [x, y] = useState(0);
  
//     useEffect(() => {
//       const handleMouseMove = (event) => {
//         setX(event.clientX);
//         setY(event.clientY);
//       };
      
//       window.addEventListener('mousemove', handleMouseMove);
//       return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);
  
//     return render({ x, y });
//   }


// function App(){
//     return (
//         <Mousetracker render={({x,y})=>(
//             <h1>the mouse is at ({x},{y})</h1>
//         )}/>
//     );
// }
// //for aabove one we pass the props such as the position of the mouse

// //for the hooks:



// function Mousetracker() {
//     const [position,setposition] = useState({x:0,y:0});
  
//     useEffect(() => {
//       const handleMouseMove = (event) => {
//         setposition({x:event.clientX,y:event.clientY})
//       };
      
//       window.addEventListener('mousemove', handleMouseMove);
//       return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);
  
//     return position;
//   }


// function App(){
// const {x,y}=useMousePosition();
//     return (
//             <h1>the mouse is at ({x},{y})</h1>
//     );
// }
// //with hook we can achieve the same data without pass the props

// //2)Higher order function:
// //it takes the coponent and return the new component wih additional propsor logic
// //it will take the component and wrpa it add to extra functionality

// function withMousePosition(Component) {
//     return function WrappedComponent(props) {
//       const [position, setPosition] = useState({ x: 0, y: 0 });
  
//       useEffect(() => {
//         const handleMouseMove = (event) => {
//           setPosition({ x: event.clientX, y: event.clientY });
//         };
  
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//       }, []);
  
//       return <Component {...props} position={position} />;
//     };
//   }
  
//   function DisplayMousePosition({ position }) {
//     return <h1>The mouse is at ({position.x}, {position.y})</h1>;
//   }
  
//   const EnhancedComponent = withMousePosition(DisplayMousePosition);
  
//   function App() {
//     return <EnhancedComponent />;
//   }
  
//   //for hooks:

//   function useMousePosition() {
//       const [position, setPosition] = useState({ x: 0, y: 0 });
  
//       useEffect(() => {
//         const handleMouseMove = (event) => {
//           setPosition({ x: event.clientX, y: event.clientY });
//         };
  
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//       }, []);
  
//       return position ;
//     };
  
  
//   function DisplayMousePosition() {
//     const position=useMousePosition();
//     return <h1>The mouse is at ({position.x}, {position.y})</h1>;
//   }
  
  
//   function App() {
//     return <DisplayMousePosition/>;
//   }
//   //hook are simpler and more readable to the HOC 
//   //we dont need to wooory about the props forwarding etc
// //if we use the HOC then we need to the wap this one if we use the hook then we dnt need to wrapping this one we can directly 

// //52)switching in react:
// //refer to the changing or rendering different component based on certain condition



// //1)conditional rending:
// function App() {
//   const position=useMousePosition();
//   return (
//     <div>
//         {isloggedin?<Dashboard/>:<Login/>}
//         <button onClick={()=>setloggedin(!isloggedin)}>{isloggedin?'logout':'login'}</button>
//     </div>
//   );
// }

// function Dashboard() {
//     return <h1>Welome to the dash board</h1>;
//   }



// function Login() {
//   return <h1>please login to continue</h1>;
// }
// //we switch btwwen the dashboard amd the login


// //2)React router:views the single page application
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// function App() {

//     return (
//         <Router>
//             <nav>
//                 <Link to="/home">Home</Link>
//                 <Link to="/about">About</Link>
//             </nav>
//             <Switch>
//                 <Route path="/home">
// <Home/>
//                 </Route>
//                 <Route path="/about">
// <About/>
//                 </Route>
//                 <Route path="/">
// <Welcome/>
//                 </Route>
//             </Switch>

//         </Router>
    
//     );
//   }
  
//   function Home() {
//     return <h1>Home page</h1>;
//   }

//   function About() {
//       return <h1>About page</h1>;
//     }
  
  
  
//   function Welcome() {
//     return <h1>Welcome to site</h1>;
//   }
//   //for above one we switch the compnent based on the URL

//   //3)state based component switching:
//   import React from 'react';


//   function App(){
//     const [step,setstep]=useState(1);

//     return(
//         <div>
//             {step===1&&<Stepone/>}
//             {step===2&&<Steptwo/>}
//             {step===3&&<Stepthree/>
//             <button onClick={()=>setstep(step+1)}>Next</button>}

//         </div>
//     )

//   }

//   function Stepone(){
//     return <h1>This is step 1</h1>
//   }

//   function Steptwo(){
//     return <h1>This is step 2</h1>
//   }
//    function Stepthree(){
//     return <h1>This is step 3</h1>
//   }


//   //53.mixin:it is reuse code across multiple componenet
//   //we will use the reusable logic
//   var React = require('react');

// // Define a mixin
// var MyMixin = {
//   componentDidMount: function() {
//     console.log('Component Mounted!');
//   },
//   handleClick: function() {
//     console.log('Button clicked!');
//   }
// };

// // Define a component that uses the mixin
// var MyComponent = React.createClass({
//   mixins: [MyMixin],

//   render: function() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     );
//   }
// });

// module.exports = MyComponent;
// //above one we have the problemm wih the same name lead to unexpected behavior
// //difficult to track behavior:when we use multiple mixin

// //solution we have the HOC,hooks 
// //example hooks:

// import { useEffect } from 'react';

// function useLogging(){
//     useEffect(()=>{
// console.log('component mounted');
//     },[]);
// }


// function Mycomponent(){
//     useLogging();
//     return <div>Hello world</div>;
// }
// Mycomponent();

// //54.Pointer event:
// //standard way to handle input from the mouse 
// //1)onpointerdown:

// function handlepointerdown(event){
//     console.log('pointre down at,',event.clientX,event.clientY);
// }
// return <div onPointerDown={handlepointerdown}>click or touch me</div>

// //2)onpointerdown:
// //triggered when pointer move across element
// function handlepointermove(event){
//     console.log('pointre down at,',event.clientX,event.clientY);
// }
// return <div onPointerMove={handlepointermove}>Move pointer here</div>

// //3)onpointerdown:
// //trigger when pointer released from element
// function handlepointerup(event){
//     console.log('pointre released at,',event.clientX,event.clientY);
// }
// return <div onPointerUp={handlepointerup}>Release pointer here</div>

// //4)onpointercancel:
// //triggered pointer operation cancel such as the touch is interrupted by another input such as the scrolling
// function handlepointercancel(event){
//     console.log('pointre event cancel at,');
// }
// return <div onPointerCancel={handlepointercancel}>pointer cancel</div>


// //55.HTML element vs react component:
// //to distinguis between the native DOM(lowercase) and React component like the native React React.Component 


// //56.custom dom attributes suppported in react 16?
// //for before react will skip the unknown DOM attributes
// //if we wrote JSX with attribute
// //<div mycustomattribute={"something"}/>

// //<div/>
// //in react 16 it will accept
// //<div mycustomattribute={"something"}/>

// //57.loop inside the jsx:
// //using the javascript expresssion with curly braces{}
// //we use the array metthod like .map() which itrarate the array return new array


// function App(){
//     const lists=['apple','banana','orange'];
//     return (
//         <div>
//             <h1>Fruit list</h1>
//             <ul>
//                 {lists.map((item,index)=>(
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default App;

// function Greeting(props){
//     return (
//         <div>
//             <h1>Hello,{props.name}</h1>
//             <p>Hello,{props.place}</p>

//         </div>
//     );
// }
// export default Greeting;

// //58.access the props i attribute quotes:

// function App(){

//     return (
//         <div>
//             <Greeting name="alice" place="wonderland"/>
//             <Greeting name="naveen" place="react land"/>
//         </div>
//     )
// }




// import React from 'react';
// import PropTypes from 'prop-types';

// function ProductList({ products }) {
//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <strong>{product.name}</strong> - ${product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Define the shape of the products prop (array of objects)
// ProductList.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired
//     })
//   ).isRequired
// };

// function App() {
//   const productData = [
//     { id: 1, name: 'Laptop', price: 999 },
//     { id: 2, name: 'Phone', price: 799 },
//     { id: 3, name: 'Tablet', price: 399 }
//   ];

//   return (
//     <div>
//       <ProductList products={productData} />
//     </div>
//   );
// }

// export default App;

// //for above verify it should array  while passing them ,and verify it should this shape like the id(number),name(string),price(number)
// //60.simple one

// //61.React and react router:

// //1)React:
// //Javascript library build for userinterface,from this one we create the view layer such as the single page application
// //we have like the currrect state of application
// //from this one state,prop flow,virtual dom for efficient ui updates

// //2)react router:
// //React router is routing library that enables navigation management of different component depanding on the URL path
// //from this one we are doing like the <Link/> or <Navlink/>
// //it will helpful to have the different page

// //62)react and reactdom:
// //React platform independance:
// //React:focuses unser nterfaces,manage ui logic ,component redering
// //react dom:it is we can build the react native and react-vr etc from this one
// //Modularity:
// //react focus indepandent on the react dom any dom system
// //react dom taking he react component tree and eficiently rendering into the browserdom
// //simplified update:
// //if any change we make at the react dom then it is not directly affect the react


// //63.React label:
// //it will provide the more clear about the clear description for input field
// <label htmlFor="username">Username</label>

// //64.combin the multiple inline style object
// //sing the spread syntex:
// const style1 = {
//     color: 'blue',
//     fontSize: '16px',
//   };
  
//   const style2 = {
//     backgroundColor: 'yellow',
//     padding: '10px',
//   };
  
//   const CombinedComponent = () => {
//     return (
//       <div style={{ ...style1, ...style2 }}>
//         This div has combined styles.
//       </div>
//     );
//   };

//   //alternative method to apply into this one 
//   //<div style={Object.assign({}, style1, style2)}> 

//   //65.we have to re-render when we have the resized event:
// //  we can listen resize event and update the component state accordingly

// import React, { useState, useEffect } from 'react';

// const ResizeComponent = () => {
//   // State to store window dimensions
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     // Define the resize handler
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     // Add the resize event listener
//     window.addEventListener('resize', handleResize);

//     // Cleanup function to remove event listener when the component is unmounted
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Empty dependency array ensures it runs once when the component mounts

//   return (
//     <div>
//       <p>Width: {windowSize.width}px</p>
//       <p>Height: {windowSize.height}px</p>
//     </div>
//   );
// };

// export default ResizeComponent;
//Re-rendering: When the window is resized, the handleResize function updates the state with the new dimensions, triggering a re-render of the component.




// //66.how to print the json with react:

// //HINT:we convert the javascript object into javascript string
// import React  from 'react';

// const Printjson = ({data}) => {
//  const prettyjson=JSON.stringify(data,null,2);

//   return (
//     <div>
// <h2>pretty json</h2>
// <pre>{prettyjson}</pre>
//     </div>
//   );
// };


// const App=()=>{
//   const sampledata={
//     name:"naveen"
//   };
//   return <Printjson data={sampledata}/>

// }

// export default App;


//67.why we can't update the react:
//when we receive the data to the child from the parant we cant not change the date at tchild Component
//if child component break the data flow then it is unpredictable flow


//68.
import React,{useEffect,useRef}  from 'react';

const Fragment = () => {
const inputref=useRef(null);
useEffect(()=>{
inputref.current.focus();
},[]);
  return (
    <div>
<h2>Focus on input page load</h2>
<input ref={inputref} type="text" placeholder="this will focus on load"/>
    </div>
  );
};

export default  Fragment ;


//from this one useref focus on the do directly then useeffect will run for the focus point
//it mean it will automatically focus on the text field once the page load 


//70.how to add the google analytics:


//71.vendor in css:
// //everything is not supported by thr browser then we should have the code each browser


// const MyComponent = () => {
//   const styles = {
//     // Applying vendor prefixes to the 'transform' property
//     transform: 'rotate(45deg)',
//     WebkitTransform: 'rotate(45deg)',  // Safari and Chrome
//     MozTransform: 'rotate(45deg)',     // Firefox
//     msTransform: 'rotate(45deg)',      // Internet Explorer
//   };

//   return (
//     <div style={styles}>
//       <h1>Vendor Prefixes Example</h1>
//     </div>
//   );
// };



//73.exception on react component naming:
//a)Componentname start with captital
function MyComponent(){
  return <div>Hello</div>
}

const Anothercomponent=()=><div>Another component</div>


//invalid:
function mycomponent(){
  return <div>invalid</div>
}

//2)function or class declaration:
function MyComponent(){
  return <div>Hello</div>
}

const Anothercomponent=()=><div>Another component</div>
//which is the invalid:

function (){
  return <div>Hello</div>
}

const =()=><div>Another component</div>
//c)export and import are the same name:
//valid
export default function MyComponent(){
  return <div>hello</div>
}

import MyComponent from './Mycomponent';

//invalid:
export default function Someothername(){
  return <div>hello</div>
}

import MyComponent from './Mycomponent';
//d)avoid the naming convention such as the string and array:

function Array(){
  return <div>hello</div>
}

function String(){
  return <div>hello</div>
}


//d)avoid the naming convention such as the string and array:
//valid
function Mycomponent(){
  return <div>hello</div>
}

function My-component(){
  return <div>hello</div>
}
function My component(){
  return <div>hello</div>
}

//e)Avoid using the keyword:


//d)avoid the naming convention such as the string and array:
//valid
function React(){
  return <div>hello</div>
}

function Component(){
  return <div>hello</div>
}


//74.it is possible to use the async /await in react:

import React, { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Use `useEffect` to call the async function
    useEffect(() => {
       // Asynchronous function to fetch data
    const fetchData = async () => {
      try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
          const result = await response.json();
          setData(result); // Update state with fetched data
      } catch (error) {
          console.error("Error fetching data:", error);
      } finally {
          setLoading(false); // Hide loading state
      }
  };
    }, []); // Empty dependency array ensures it runs once

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Post Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
//74.common structure in te react:

//asset we store the image and the fonts
//component: reusable ui compoent such as the button and model
//pages  page level component such as the home, about ,login
//context for the global state management: such as the auth.js,themecontext
//services:handle the external services like the firebase,api etc
//contain the global style css:
//utils:function for the helper accross the app
//routes:



//75.framework for the animation for the react:

//framer motion: ideal for the basic and avanced animation
//react spring:great for animation that mimic real world animation
//react transition group:adding the simple enter/exit transition
//GSAP:ideal for complex.high performane animation
//react lottie:best for the predesigned animation
//react reveal it is for the scroll based effect
//anime.js lightweight,timeline animation
//react motion:natural and smooth animation
//three.js it is reprseent the 3D animation

//77.scoped and modular approach to styling in react:style are locally scoped to the component
//tradition css style are global so classname can accidantly overwrite one another
//but styles in the css have the styled component

//78.react specific linter:
//with the react plugin:react specific code like the proptypes and ddefault props
//react hook plugin:ensure correct usage of reac hooks like the useEffect,useState
//airnum react strict set of react hook
//prettier integration:ensuring your lintingrules and conflict rules


// //React router:
// //managing the navigation and rendering components based on the application url
// //browserrouter:wrap the entire app uses the browser history
// //routes:container for all route
// //route:define the singl route
// //enable navigation without full page reload

// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


//79.react router and the history:

//both the thing are work at the single language but it was work with the different purpose 
//higherlevel library on the top of the history
//build in route,route matching

//history:it is build for the low-level utilises for managing session
//no routing ,only manage the history


import { createBrowserHistory } from "history";

const history = createBrowserHistory();

// Navigate to a different route
history.push("/about");

// Listen to changes in history
history.listen(({ location, action }) => {
  console.log(`The current URL is ${location.pathname}`);
});




















