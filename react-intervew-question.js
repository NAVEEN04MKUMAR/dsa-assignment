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






















