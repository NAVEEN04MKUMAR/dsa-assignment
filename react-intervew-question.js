//1.difference between the HTML AND XML
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



//*2.difference between the unidirectional flow and bidirectionflow
//unidirection:
//parant comoponent holds the state and props down to child componentsToColor,
//changes in the child component do not affect the parant component directly



//Unidirection parant
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




//we can change the stage from parant to child and child to parant

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



//bidirection child.jsx
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

//3.Composable component

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

//4.about jsx
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
//component examples:
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


//using class over the Function if it is required the old third party library
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

//6.memo in react:
//memo if we want to avoid the re-render it will helpfull
//same output will get if we have the same state and props
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

//9.about state:it means like is is the component the we store some information that will change over time 
differance between the it is private and fully controlled by the component
will not access to any one because it is like the till the owner component decides to pass it

//10.state and props:
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

//11.state:managed by the component itself,can be updated using setstate
//it is changes in the state trigger a re-render of the component and its childern

//props:
properties are the parant component to childrebn are read only
used the pass the data between component
here coponent is reusable with the usage of props 

//12.event handling:

//in html
 <button onclick="activatelasers()"></button>

//in react
<button onClick={activatelasrs}/> 

//to avoid default behavior
//html we put the false
 <a 
href="#"
onclick='cconsole.log("the link was clicked");return false;'
/> 
//react we put the prevendefault
function handleclick(event){
    event.preventDefault();
    console.log("the link wa clicked");
}

//13.about sythetic event
//prevent the default action event
//it will helpful to wrap around the native DOM events
//providing consisting interface for event handling across differet platform and browser

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


//14. inline conditional expression

//it is represent the ternary condition 
<h1>hello</h1>
{
    messages.length>0&&islogin?(
<h2>you have {messages.length} unread message</h2>
    ):(
<h2> you dont have the unread message</h2>
    );
}
//15.keys:
//key is a special attribute include when mapping over arrays to render data
//key props help to idenify the what addedd or removed

const todoitems=todo.map((todo,index)=>{
    <li key={index}>{todo.text}</li>
})


//16.virtual dom:
// it is memorty light weight represation of the actual DOM
// when changes occured at the time changes will not occured at the directly to the dom then
// virtual dom created then first changes occured then compare with the dom whatver 
// minimal changes requird then we will put them   


// 17)virtual dom how it is works:
// 1)if we change anything then entire is re-render in virtual-dom
// 2)only the difference between the previous dom representation and new one is calculated
// 3)once calculation i don't then real dom will updated



//18)shadow dom:
// purpose:it is the isolation of component logic 
// ensure that components are self-containded and do not interfare with the rest of element 
// use case:it helpful to reusable component
// rendering :
// encapsulate the dom tree  which is separate from the document dom 

//18)vittual dom:
// purpose:perfomance optimasation for the dom in  react
// use case:helpful the manage the ui updates
// render:memory representation of entire dom real dom only updated with diff


//19)react fiber:
//it will solve the problem related to responsive name and updating user interface
//it will make the react as the task more small taks it will help to heavy updats
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


//20.main goal of the react fiber:

// it can split our work interruble work into chunks
// ability to prioritise,reuse work 
// better support for error boundarie







//31.Fragment:
//is the light weight process adding element without adding the any extra node to theDOM tree
//user input the repository name and description
import React from "react";
const Fragment=()=>{
    return (
        <React.Fragment>
            <h1>Hiii</h1>
        </React.Fragment>
        <>
        <h1>Hii</h1>
        </>
    )
}
export default  Fragment;


// 32.why fragment not div:
// it is the  have the less cluster to have the clean one 
// it is run the css very quickly

//33. React Portal:
//Modals are placed the outside of the parant compnent hierarchy to avoid the layout issue or to ensure they rendered on top of the element 
//normal react render inside the dom
//explicitly specify the dom node render the content
import React,{useState} from "react";
import ReactDOM from 'react-dom';

const Modal=(isopen,onclose)=>{
    if(!isopen) return true;
    return ReactDOM.createPortal(
     <div>
        <h1>I am modal</h1>
        <button onClick={onclose}>close</button>
     </div>,
     document.getElementById('modal-root')
    );
}

const Portal=()=>{
    const [ismodelopen,setismodelopen]=useState(false);

    const openmodal=()=>setismodelopen(true);
    const closemodal=()=>setismodelopen(false);

    return (
     <div>
        <h1>Portal</h1>
        <button onClick={openmodal}>open modal</button>
        <Modal isOpen={ismodelopen} onClose={closemodal}></Modal>
     </div>
    )
  
 
}

export default  Portal;

//34.state component:
//  state:maintain and manages its own internal state
//this willl change over time  such as the input
import React,{useState} from "react";
const State=()=>{
    const [count,setcounter]=useState(0);
    const increment=()=>setcounter(count+1);
    return (
     <div>
        <h1>Counter:{count}</h1>
        <button onClick={increment}>Increment</button>
     </div>
    )
}
export default State;

//35.stateless:
//do not maintain the any internal state
//primaryly used for the ui:

import React from 'react';
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;

//36.proptypes:PropTypes, a built-in feature of React that allows you to specify the expected types and structure of the props a component should receive
import React,{useState} from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Fragment=({name,age,isActive,id})=>{
    return (
     <div>
        <h1>Name:{name}</h1>
        <p>Age:{age}</p>
        <p>Status:{isActive?'Active':'Inactive'}</p>
        <p>Id:{id}</p>

     </div>
    )
}

Fragment.proptypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    isActive:PropTypes.bool.isRequired,
    id:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
}
export default  Fragment;

//37.advantags of react:

//increase the application performance
//JSX code easy to read and write
//render the both side of the client and the serverside(next.js) rendering
//react uses the unidirectional data flow
//if we extend the react native then what are the lanuage we will learn then same one will help to get the do ios and android project 

//38.disadvantages of react:
//it is not full framework it is just view library
//code complexity increase with the JSX
//to many small compennet we have that is for the boiler plate
//writing the jsx file will be difficult

//39.static types:
//it is ensure the that the types of variables,props,and state are correct at compile time(before code executed)
//for the javascript we have the typescript largecodebases and small we have the proptypes
//proptypes verify at the run time

//40.use of the react-dom:
//render the react component to DOM
//it can helpful to render at the server side
//1.reactDOM.render:helpful to the render the react into dom
//2.reactDOM.createRoot:better performance optimization
//3.reactDom.hydrate():used for the server side render,it will put the intially html into the clientside
//4.findDOMNode():return the corresponding node for the given react
//5.reactDOM.createPortal():we can render at the diff part of the DOM tree (outside of the parant component)

//41.react ssr:

//1)client request the page
//2)express server receive the request
//3)react render componentserver //reactserver.renderToString()
//4)server the reads the content from HTML THEN insert the placeholder
//5)server send the HTML to client
//6)client receive the HTML and render content
//7)react hydrates the html and make the page interactive
//8)client navifgation and the react updates

//42.INNERHTML:
//we insert the raw HTML into the DOM ,IT is unsafe for the expose the security concerncross-site-scripting

import React from 'react';

const MyComponent = () => {
  const htmlContent = '<h1>This is a heading</h1><p>This is a paragraph of text.</p>';
  return (
    <div>
      <h2>React Component with Raw HTML:</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};
export default MyComponent;


//43.insert the css in react:
//where the it is accept the object 
import React from "react";
const MyComponent=()=>{

const divstyle={
backgroundColor:'lightblue',
paddding:'20px',
fontSize:'18px'
};

    return <div style={divstyle}>this is the styled div using the inline style</div>
};
export default MyComponent;


//44.not.React event different from HTML and javascript:
//1)we use the camelcase for the react and lowercase for the normal one 
<button onClick={handleclick}>Click me</button>
//  for native we use the onclick and onnouseover

//2)evethandling:(function)
//in react we pass the function referance to the eventhandler

const handleclick=()=>{
    alert('button clicked');
}
return <button onClick={handleclick}>click me</button>

 //native dom:
<button onclick="alert('button clicked)">click me</button>



//45.impact of index as keys:
//using of the index of array as the key when rendring list of element

const items=["naveen","kumar","family"];
const list=items.map((item,index)=>{
<li key={index}>{item}</li>
});
//dynamic changes:
//reordering:if you reorder the list index based key will change,but actual item will not
//performance issue will rise because of the when we add the component and remove the component it will take the more number of time it will rerender
//best practice:
const items=[{id:1,name:"naveen"},{id:2,name:"kumar"},{id:3,name:"family"}];
const list=items.map((item,index)=>{
<li key={index.id}>{item.name}</li>
});


//46.conditional based rendering:
//using the if/else:

function isgreeting({isloggedin}){
    if(isloggedin){
return <h1>welcome</h1>
    }else{
        return <h1>please sign in</h1>
    }
}
//using the ternary operator:
function isgreeting({isloggedin}){
return(
    <h1>
        {isloggedin?'welcomeback':'please login'}
    </h1>
)
}
//using the and operator
function isgreeting({isloggedin}){
    return(
        <h1>
            {isloggedin&&<h1>welcome back</h1>}
            {!isloggedin&&<h1>please sign in</h1>}
        </h1>
    )
    }


    //47.why it is risk using the prop by spread operator::
    //a)we are pass the non valid DOM from the prop it show invalid error:
    function button(props){
        return <button {...props}>Click me</button>
    }
    const props={
        className:'btn-primary',
        onClick()=>alert('clicked');
        customProp:'not-a-dom-attribute'
        
    };
//note here customprop is not the valid dom so it show the error
//b)overwrite the existing props:
function Button({label},onClick,...props){
    return <button {...props} onClick={onClick}>{label}</button>
}
//note:here we are pass the props as the onClick but again we override the onClick

//c)while debug it show the difficulties when we have the props contain the multiple place we have to verify

//solution:
function button({label,onClick,...props}){
 const {customprop,...domprop}=props;
    return <button {...domprop}>Click me</button>
}
//use the explicitely defined:
function Button({label,onClick}){
    return <button onClick={onClick}>{label}</button>
}

//48.memoizing a component means the cahing the result of componenet rendering
//it mean if we receive the same props then there is no need to re-render unless the props change

function Mycomponent=({label,onClick})=>{
    return (
        <div>
        <h1>{name}</h1>
        <p>Age:{Age}</p>
        </div>
    );
};
const memocomponent=React.memo(Mycomponent);
export default memocomponent;

//react.memo:it have the pure component(it is for the same props for the same output)

const MyComponent = React.memo(
    ({ name, age }) => {
        console.log('Rendering MyComponent');
        return (
          <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
          </div>
        );
      },
      (prevProps, nextProps) => {
        // Only re-render if "age" has changed
        return prevProps.age === nextProps.age;
      }
    );
    
    export default MyComponent;
    //for above one Child will not re-render because value remain same
    //twist:if we use the memo concept still it will change if same prop with the non primitive data type like the object etc
    
    const MyComponent = React.memo(({ data }) => {
  console.log('Component rendered');
  return <div>{data}</div>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const data = { key: 'value' }; // New object reference each time
  return (
    <div>
      <MyComponent data={data} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
//for this one still prop is same but it will re-render because of he non primitative data type


//51.Hooks are better then the props and Higher order component:
//1)hooks vs the renderprops:
//render props:
//a pattern where a component accepts a function as a props ,return <JSX></JSX>

function Mousetracker({ render }) {
    const [x, y] = useState(0);  
    useEffect(() => {
      const handleMouseMove = (event) => {
        setX(event.clientX);
        setY(event.clientY);
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return render({ x, y });
  }

function App(){
    return (
        <Mousetracker render={({x,y})=>(
            <h1>the mouse is at ({x},{y})</h1>
        )}/>
    );
}
//for above one we pass the props such as the position of the mouse
//for the hooks:
function Mousetracker() {
    const [position,setposition] = useState({x:0,y:0});
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        setposition({x:event.clientX,y:event.clientY})
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return position;
  }

function App(){
const {x,y}=useMousePosition();
    return (
            <h1>the mouse is at ({x},{y})</h1>
    );
}
//with hook we can achieve the same data without pass the props

//2)Higher order function:
//it takes the component and return the new component with additional props or logic
//it will take the component and wrap it add to extra functionality

function withMousePosition(Component) {
    return function WrappedComponent(props) {
      const [position, setPosition] = useState({ x: 0, y: 0 });
  
      useEffect(() => {
        const handleMouseMove = (event) => {
          setPosition({ x: event.clientX, y: event.clientY });
        };
  
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }, []);
  
      return <Component {...props} position={position} />;
    };
  }
  
  function DisplayMousePosition({ position }) {
    return <h1>The mouse is at ({position.x}, {position.y})</h1>;
  }
  
  const EnhancedComponent = withMousePosition(DisplayMousePosition);
  
  function App() {
    return <EnhancedComponent />;
  }
  
  //for hooks:
  function useMousePosition() {
      const [position, setPosition] = useState({ x: 0, y: 0 });
  
      useEffect(() => {
        const handleMouseMove = (event) => {
          setPosition({ x: event.clientX, y: event.clientY });
        };
  
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }, []);
  
      return position ;
    };
  
  
  function DisplayMousePosition() {
    const position=useMousePosition();
    return <h1>The mouse is at ({position.x}, {position.y})</h1>;
  }
  
  
  function App() {
    return <DisplayMousePosition/>;
  }
  //hook are simpler and more readable to the HOC 
  //we dont need to wooory about the props forwarding etc
//if we use the HOC then we need to the wap this one if we use the hook then we dnt need to wrapping this one we can directly 

//52)switching in react:
//refer to the changing or rendering different component based on certain condition
//1)conditional rending:
function App() {
  const position=useMousePosition();
  return (
    <div>
        {isloggedin?<Dashboard/>:<Login/>}
        <button onClick={()=>setloggedin(!isloggedin)}>{isloggedin?'logout':'login'}</button>
    </div>
  );
}

function Dashboard() {
    return <h1>Welcome to the dash board</h1>;
  }



function Login() {
  return <h1>please login to continue</h1>;
}
//we switch between the dashboard amd the login


//2)React router:views the single page application
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {

    return (
        <Router>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Switch>
                <Route path="/home">
<Home/>
                </Route>
                <Route path="/about">
<About/>
                </Route>
                <Route path="/">
<Welcome/>
                </Route>
            </Switch>

        </Router>
    
    );
  }
  
  function Home() {
    return <h1>Home page</h1>;
  }

  function About() {
      return <h1>About page</h1>;
    }
  
  
  
  function Welcome() {
    return <h1>Welcome to site</h1>;
  }
  //for above one we switch the compnent based on the URL

  //3)state based component switching:
  import React from 'react';


  function App(){
    const [step,setstep]=useState(1);

    return(
        <div>
            {step===1&&<Stepone/>}
            {step===2&&<Steptwo/>}
            {step===3&&<Stepthree/>
            <button onClick={()=>setstep(step+1)}>Next</button>}

        </div>
    )

  }

  function Stepone(){
    return <h1>This is step 1</h1>
  }

  function Steptwo(){
    return <h1>This is step 2</h1>
  }
   function Stepthree(){
    return <h1>This is step 3</h1>
  }


  //53.mixin:it is reuse code across multiple componenet
  //we will use the reusable logic
  var React = require('react');

// Define a mixin
var MyMixin = {
  componentDidMount: function() {
    console.log('Component Mounted!');
  },
  handleClick: function() {
    console.log('Button clicked!');
  }
};

// Define a component that uses the mixin
var MyComponent = React.createClass({
  mixins: [MyMixin],

  render: function() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
});

module.exports = MyComponent;
//above one we have the problem wih the same name lead to unexpected behavior
//difficult to track behavior:when we use multiple mixin

//solution we have the HOC,hooks 
//example hooks:

import { useEffect } from 'react';

function useLogging(){
    useEffect(()=>{
console.log('component mounted');
    },[]);
}


function Mycomponent(){
    useLogging();
    return <div>Hello world</div>;
}
Mycomponent();

//54.Pointer event:
//standard way to handle input from the mouse 
//1)onpointerdown:

function handlepointerdown(event){
    console.log('pointre down at,',event.clientX,event.clientY);
}
return <div onPointerDown={handlepointerdown}>click or touch me</div>

//2)onpointermove:
//triggered when pointer move across element
function handlepointermove(event){
    console.log('pointre down at,',event.clientX,event.clientY);
}
return <div onPointerMove={handlepointermove}>Move pointer here</div>

//3)onpointerup:
//trigger when pointer released from element
function handlepointerup(event){
    console.log('pointre released at,',event.clientX,event.clientY);
}
return <div onPointerUp={handlepointerup}>Release pointer here</div>

//4)onpointercancel:
//triggered pointer operation cancel such as the touch is interrupted by another input such as the scrolling
function handlepointercancel(event){
    console.log('pointre event cancel at,');
}
return <div onPointerCancel={handlepointercancel}>pointer cancel</div>


//55.HTML element vs react component:
//to distinguish between the native DOM(lowercase) and React component like the native React React.Component 

//56.custom dom attributes suppported in react 16?
//for before react will skip the unknown DOM attributes
//if we wrote JSX with attribute
//<div mycustomattribute={"something"}/>

//<div/>
//in react 16 it will accept
//<div mycustomattribute={"something"}/>

//57.loop inside the jsx:
//using the javascript expresssion with curly braces{}
//we use the array metthod like .map() which itrarate the array return new array


function App(){
    const lists=['apple','banana','orange'];
    return (
        <div>
            <h1>Fruit list</h1>
            <ul>
                {lists.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default App;

function Greeting(props){
    return (
        <div>
            <h1>Hello,{props.name}</h1>
            <p>Hello,{props.place}</p>

        </div>
    );
}
export default Greeting;

//58.access the props attribute quotes:

function App(){
    return (
        <div>
            <Greeting name="alice" place="wonderland"/>
            <Greeting name="naveen" place="react land"/>
        </div>
    )
}
import React from 'react';
import PropTypes from 'prop-types';

function ProductList({ products }) {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Define the shape of the products prop (array of objects)
ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

function App() {
  const productData = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 799 },
    { id: 3, name: 'Tablet', price: 399 }
  ];

  return (
    <div>
      <ProductList products={productData} />
    </div>
  );
}

export default App;
 //for above verify it should array  while passing them ,and verify it should this shape like the id(number),name(string),price(number)


// //60.simple one

//61.React and react router:

//1)React:
//Javascript library build for userinterface,from this one we create the view layer such as the single page application
//we have like the currrect state of application
//from this one state,prop flow,virtual dom for efficient ui updates

//2)react router:
//React router is routing library that enables navigation management of different component depanding on the URL path
//from this one we are doing like the <Link/> or <Navlink/>
//it will helpful to have the different page

//62)react and reactdom:
//React platform independance:
//React:focuses user interfaces,manage ui logic ,component redering
//react dom:it is we can build the react native and react-vr etc from this one
//Modularity:
//react focus indepandent on the react dom any dom system
//react dom taking the react component tree and efficiently rendering into the browserdom
//simplified update:
//if any change we make at the react dom then it is not directly affect the react


//63.React label:
//it will provide the more clear about the clear description for input field
<label htmlFor="username">Username</label>

//64.combine the multiple inline style object
//single the spread syntex:
const style1 = {
    color: 'blue',
    fontSize: '16px',
  };
  
  const style2 = {
    backgroundColor: 'yellow',
    padding: '10px',
  };
  
  const CombinedComponent = () => {
    return (
      <div style={{ ...style1, ...style2 }}>
        This div has combined styles.
      </div>
    );
  };

  //alternative method to apply into this one 
  //<div style={Object.assign({}, style1, style2)}> 

  //65.we have to re-render when we have the resized event:
//  we can listen resize event and update the component state accordingly

import React, { useState, useEffect } from 'react';

const ResizeComponent = () => {
  // State to store window dimensions
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Define the resize handler
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add the resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return (
    <div>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
};

export default ResizeComponent;
//Re-rendering: When the window is resized, the handleResize function updates the state with the new dimensions, triggering a re-render of the component.


//66.ok.how to print the json with react:

//HINT:we convert the javascript object into javascript string
import React  from 'react';

const Printjson = ({data}) => {
const prettyjson=JSON.stringify(data,null,2);

  return (
    <div>
<h2>pretty json</h2>
<pre>{prettyjson}</pre>
    </div>
  );
};

const App=()=>{
  const sampledata={
    name:"naveen"
  };
  return <Printjson data={sampledata}/>
}

export default App;


//67.why we can't update the react:
// when we receive the data to the child from the parant we can't not change the date at the child Component
// if child component break the data flow then it is unpredictable flow


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

//69.
//70.how to add the google analytics:


//71.ok.vendor in css:
//everything is not supported by the browser then we should have the code each browser

const MyComponent = () => {
  const styles = {
    // Applying vendor prefixes to the 'transform' property
    transform: 'rotate(45deg)',
    WebkitTransform: 'rotate(45deg)',  // Safari and Chrome
    MozTransform: 'rotate(45deg)',     // Firefox
    msTransform: 'rotate(45deg)',      // Internet Explorer
  };

  return (
    <div style={styles}>
      <h1>Vendor Prefixes Example</h1>
    </div>
  );
};

/72.

//73.ok.exception on react component naming:
//a)Componentname start with captital
function MyComponent(){
  return <div>Hello</div>
}

const Anothercomponent=()=><div>Another component</div>


//invalid:
function mycomponent(){
  return <div>invalid</div>
}
//b)function or class declaration:
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
//Invalid:
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


//74.ok.it is possible to use the async /await in react:

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

//framer motion: ideal for the basic and advanced animation
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
//with the react plugin:react specific code like the proptypes and default props
//react hook plugin:ensure correct usage of react hooks like the useEffect,useState
//airnum react strict set of react hook
//prettier integration:ensuring your lintingrules and conflict rules


//React router:
//managing the navigation and rendering components based on the application url
//browserrouter:wrap the entire app uses the browser history
//routes:container for all route
//route:define the single route
//enable navigation without full page reload

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


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


//81.what are the route available for the react Router():

1. <BrowserRouter>
Purpose: Manages routing using the HTML5 history API (pushState, replaceState).
Usage: Best suited for web applications where you have full control over the server (e.g., you can serve all routes from the same entry point).

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
2. <HashRouter>
Purpose: Manages routing using the URL hash (#) fragment, commonly used in static file hosting environments where the server doesn't handle routing.
Usage: Ideal for environments like GitHub Pages, where the server can't rewrite URLs to the main index.html.

import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
3. <MemoryRouter>
Purpose: Keeps the history of your "route stack" in memory, rather than syncing it with the browser's address bar.
Usage: Primarily used for testing or environments like React Native where you don't have a browser.

import { MemoryRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
}
4. <StaticRouter>
Purpose: A router that renders static HTML, typically used in server-side rendering (SSR) applications.
Usage: Provides routing for server-rendered React applications, often paired with frameworks like Next.js or custom SSR setups.

import { StaticRouter, Routes, Route } from 'react-router-dom';

function App({ location }) {
  return (
    <StaticRouter location={location}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </StaticRouter>
  );
}
5. <Router>
Purpose: The base component for all routers in React Router. It allows for custom implementations and is used internally by <BrowserRouter>, <HashRouter>, and <MemoryRouter>.
Usage: Rarely used directly unless you're implementing a custom router.

import { Router, Routes, Route, createBrowserHistory } from 'react-router-dom';

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router navigator={customHistory} location={customHistory.location}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}



// push Method
// Purpose:
// Adds a new entry to the browser's history stack.
// Allows the user to navigate back to the previous page using the browser's back button.
// Use Case:
//Navigate to a new page while retaining the current page in the history.
Example:
import { useNavigate } from 'react-router-dom';

function Example() {
  const navigate = useNavigate();

  function goToAboutPage() {
    navigate('/about'); // Internally calls `history.push`
  }

  return <button onClick={goToAboutPage}>Go to About Page</button>;
}
// If the user clicks the button, the /about page is added to the history stack.
// The browser back button will allow navigation back to the previous page.
// replace Method

// Purpose:
// Replaces the current entry in the browser's history stack with a new one.
// Does not allow the user to navigate back to the previous page using the browser's back button (since the previous entry is replaced).
//Use Case:
// Navigate to a new page without keeping the current page in the history.
// Useful for scenarios like redirecting after a login or form submission where going "back" to the previous page is not desirable.

import { useNavigate } from 'react-router-dom';

function Example() {
  const navigate = useNavigate();

  function redirectToHomePage() {
    navigate('/', { replace: true }); // Internally calls `history.replace`
  }

  return <button onClick={redirectToHomePage}>Go to Home Page</button>;
}
// Clicking the button navigates to /, but the previous page is removed from the history stack.
// The browser back button will not navigate back to the previous page.

//3. Using the history Object Directly
//You can also create and use your own history object. This approach is useful for centralizing navigation logic.

import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

function App() {
  const navigate = () => {
    customHistory.push('/new-page'); // Navigate to /new-page
  };

  return (
    <Router history={customHistory}>
      <div>
        <button onClick={navigate}>Go to New Page</button>
      </div>
    </Router>
  );
}

export default App;

//4. Using Functional Components with useHistory (React Router v5)
//While useHistory is not available in v4, if you're upgrading to v5, you can use this hook.

import React from 'react';
import { useHistory } from 'react-router-dom';

function MyComponent() {
  const history = useHistory();

  const navigate = () => {
    history.push('/new-page');
  };

  return <button onClick={navigate}>Go to New Page</button>;
}
export default MyComponent;

//84.How to get query parameters in React Router v4:
// Using URLSearchParams
// The URLSearchParams API provides an easy way to parse query strings.

//Example
import React from 'react';
import { Route } from 'react-router-dom';

function MyComponent({ location }) {
  const queryParams = new URLSearchParams(location.search);

  const paramValue = queryParams.get('paramName'); // Get value of 'paramName'
  
  return <div>Query Parameter Value: {paramValue}</div>;
}

function App() {
  return (
    <Route path="/example" component={MyComponent} />
  );
}

export default App;
//URL
//If the URL is /example?paramName=value123, the output will be:
Query Parameter Value: value123

//2. Using qs Library
The qs library can parse query strings into objects.

//Installation
//npm install qs
//Example
import React from 'react';
import { Route } from 'react-router-dom';
import qs from 'qs';

function MyComponent({ location }) {
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });

  const paramValue = queryParams.paramName; // Get value of 'paramName'
  
  return <div>Query Parameter Value: {paramValue}</div>;
}

function App() {
  return (
    <Route path="/example" component={MyComponent} />
  );
}

export default App;
//URL
//If the URL is /example?paramName=value123, the output will be:


Query Parameter Value: value123
3. Handling Multiple Query Parameters
Both URLSearchParams and qs can handle multiple parameters.

//Using URLSearchParams
function MyComponent({ location }) {
  const queryParams = new URLSearchParams(location.search);

  const param1 = queryParams.get('param1');
  const param2 = queryParams.get('param2');

  return (
    <div>
      Param1: {param1}, Param2: {param2}
    </div>
  );
}
// Using qs
// jsx

function MyComponent({ location }) {
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });

  return (
    <div>
      Param1: {queryParams.param1}, Param2: {queryParams.param2}
    </div>
  );
}
//For a URL like /example?param1=value1&param2=value2, the output will be:

Param1: value1, Param2: value2
4. Accessing Query Parameters in Functional Components
If you're using a functional component, you can access the location prop by using the withRouter higher-order component or React's Context.

//Using withRouter
import React from 'react';
import { withRouter } from 'react-router-dom';

function MyComponent({ location }) {
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get('paramName');

  return <div>Query Parameter Value: {paramValue}</div>;
}

export default withRouter(MyComponent);



      
//85.how to implment the react not found page:
//Implementing a default or "Not Found" (404) page in React Router ensures users see an appropriate message or UI when they try to access an undefined route. 
//Here's how to do it in different versions of React Router:

// In React Router v6
// React Router v6 introduces the path="*" syntax, which matches all routes not explicitly defined.


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function NotFound() {
    return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//In React Router v4/v5
React Router v4/v5 uses <Switch> to ensure only one route matches. A Not Found page can be implemented by adding a fallback <Route> without a path at the end of the <Switch>.

//Example:
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} /> {/* Catch-all route */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;


import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
// Key Differences Between v4/v5 and v6
// React Router v6: Use Routes and path="*" for fallback routes.
// React Router v4/v5: Use <Switch> and a catch-all <Route> without a path.

//86.
//87.
//88.
//89.

//react internationalization
//90.react init:
//React Intl is a library designed to help React applications support internationalization (i18n) and localization (l10n). 
//It provides tools to format numbers, dates, times, and strings for different locales while managing translations for your app.
//React Intl is part of the broader FormatJS ecosystem and simplifies adding multi-language support to React apps.

//Key Features of React Intl
Localized Formatting:
Supports formatting dates, times, numbers, and currencies.
Handles pluralization and relative time (e.g., "3 days ago").
Translation Management:
Enables integration of translations for multiple languages.
Provides tools to extract and manage translation messages.
Context Support:
Automatically detects and applies the user's locale settings.
Allows easy switching between locales.
Customizable Components:
Provides React components and hooks for common i18n tasks.

//91.What are the main features of React Intl?
//ok.92.What are the two ways of formatting in React Intl?
//1. Declarative Formatting (Using React Components)
// This approach uses prebuilt components provided by React Intl to format content directly in JSX. It’s simple and expressive, making it suitable for most use cases.
// Key Components:
// <FormattedMessage>: Formats strings with dynamic values and translations.
// <FormattedNumber>: Formats numbers, including currencies and percentages.
// <FormattedDate>: Formats dates and times.
// <FormattedRelativeTime>: Formats relative time (e.g., "3 days ago").
// <FormattedTime>: Formats specific time values.


//     2. Programmatic Formatting (Using Hooks or HOC)
// This approach uses the useIntl hook (or injectIntl HOC) to access formatting utilities programmatically. This method is useful when you need greater flexibility or conditional logic for formatting.

// Formatting Utilities:
// formatMessage: Formats translated strings.
// formatNumber: Formats numbers, including currencies and percentages.
// formatDate: Formats dates and times.
// formatRelativeTime: Formats relative time.
// formatTime: Formats specific time values.

//ok.93.How to use FormattedMessage as placeholder using React Intl?
//HTML input attributes like placeholder expect plain text, but <FormattedMessage> is a React component and cannot directly output a string. 
//This is why formatMessage is necessary to generate a plain string for attributes like placeholder, alt, or title


//94.When Might You Need the Current Locale?
// To dynamically load locale-specific resources (e.g., images, data, or styles).
// To customize UI elements or behavior based on the locale.
// To display the locale for debugging or user information.

import React from 'react';
import { IntlProvider, useIntl } from 'react-intl';

const messages = {
  en: { welcome: 'Welcome!' },
  fr: { welcome: 'Bienvenue!' },
};

function CurrentLocale() {
  const intl = useIntl();
  const currentLocale = intl.locale;

  return <p>Current Locale: {currentLocale}</p>;
}

function App() {
  const locale = 'en'; // Change this to 'fr' to test different locales.

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <h1>{messages[locale].welcome}</h1>
        <CurrentLocale />
      </div>
    </IntlProvider>
  );
}

export default App;

//95.How to format date using React Intl?
//format dates using React Intl, you can use either the Declarative Approach with <FormattedDate> 
//the Programmatic Approach with the formatDate method available via the useIntl hook or the injectIntl HOC.

//1. Declarative Approach (Using <FormattedDate> Component)
The <FormattedDate> component is part of React Intl and is used directly in JSX for formatting dates.

//Basic Example:
import React from 'react';
import { IntlProvider, FormattedDate } from 'react-intl';

function App() {
  const today = new Date();

  return (
    <IntlProvider locale="en">
      <div>
        <p>Today's Date: <FormattedDate value={today} /></p>
      </div>
    </IntlProvider>
  );
}

export default App;
//2. Programmatic Approach (Using formatDate with useIntl or injectIntl)
//The formatDate method allows programmatic date formatting. This is useful when you need dynamic formatting logic.

//Using useIntl Hook:
import React from 'react';
import { IntlProvider, useIntl } from 'react-intl';

function App() {
  const intl = useIntl();
  const today = new Date();
  const formattedDate = intl.formatDate(today, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  return (
    <div>
      <p>Today's Date: {formattedDate}</p>
    </div>
  );
}

export default function Wrapper() {
  return (
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  );
}
//Using injectIntl HOC:
import React from 'react';
import { IntlProvider, injectIntl } from 'react-intl';

function App({ intl }) {
  const today = new Date();
  const formattedDate = intl.formatDate(today, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  return (
    <div>
      <p>Today's Date: {formattedDate}</p>
    </div>
  );
}

const WrappedApp = injectIntl(App);

export default function Wrapper() {
  return (
    <IntlProvider locale="en">
      <WrappedApp />
    </IntlProvider>
  );
}
//React Testing
    //96.what isthe  shallow rendring:

//Renderer is a utility in React Testing Library that allows you to test a React component in isolation, without rendering its child components.
//This means that only the component being tested is rendered, and any child components are not mounted or executed. 
//This is helpful when you want to focus on testing the behavior of a single component without worrying about its dependencies or nested components.

//Key Features of Shallow Rendering:
Isolated Testing:
The shallow renderer only renders the component under test, avoiding the need to deal with or test child components.
Lightweight:
Shallow rendering is faster than full rendering because it doesn't mount child components.
Prevents Side Effects:
Since child components are not rendered, shallow rendering prevents their side effects from affecting the test, making tests more predictable and isolated.
Testing the Component's API:
It is useful for testing a component's interface (e.g., props, state, methods) and ensuring it behaves as expected without dealing with the complexity of its children.
//Example of Using Shallow Rendering
import React from 'react';
import { shallow } from 'enzyme'; // Assuming Enzyme is being used
import MyComponent from './MyComponent';

describe('<MyComponent />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.exists()).toBe(true);
  });
});
//In this example:
When you are interested in the output of the component itself, not its children.
When you want to test how a component interacts with props and state, but you don’t want child components to influence the test.
Limitations of Shallow Rendering:
Lacks Realistic Testing: Since child components are not rendered, shallow rendering might miss some issues that could occur in a fully rendered application where the children are mounted.
Limited to Component's Internal Behavior: It doesn't allow you to test the full lifecycle of child components, and complex interactions might not be fully captured.
// Conclusion:
// Shallow rendering is a powerful tool for unit testing individual React components in isolation. It is most useful for testing the logic, state, and prop-based behavior of a single component. However, if you need to test how a component interacts with its children or wants to simulate real-world rendering, full rendering (via mounting) may be more appropriate.
//Would you like to see an example with React Testing Library or how to use shallow rendering with other tools like Jest or Enzyme?


//97.What is TestRenderer package in React?
    The react-test-renderer package is a testing utility for React components, primarily used for rendering components in a test environment and performing assertions on the rendered output. 
    Unlike other rendering methods such as shallow rendering or full mounting (e.g., with Enzyme or React Testing Library), react-test-renderer does not interact with the DOM,
    but instead produces a lightweight, virtual representation of the component tree.
    This is especially useful for testing the structure and output of React components without needing to worry about DOM manipulation.

Key Features of react-test-renderer:
Snapshot Testing:

It is most commonly used for snapshot testing, where you capture the rendered output of a component and compare it to a previously saved snapshot to detect any changes.
No DOM Interaction:
Unlike tools like Enzyme or React Testing Library, react-test-renderer doesn't interact with the real DOM. It only generates a virtual DOM tree.
Component Tree Rendering:
It renders the component tree as a lightweight structure that can be used for assertions in unit tests.
No Dependencies:
It doesn't require a full browser or DOM environment, so it is fast and efficient for tests, and it's often used for more isolated component tests.
Test Behavior and Structure:
It allows you to test if a component renders as expected by inspecting the component's output, checking props, and ensuring the structure matches expectations.

//98.ReactTestUtils:

//The ReactTestUtils package is a utility provided by React (specifically the react-dom/test-utils module) that allows you to simulate and interact with React components during testing. 
//It provides methods for rendering components, simulating events, and interacting with components in a testing environment, enabling developers to test how their components behave under different scenarios.

//Simulate Events:
You can simulate user interactions with your components, such as mouse clicks, form submissions, key presses, and more. This helps you test how your component responds to user input.
Shallow Rendering:
Although ReactTestUtils itself does not provide "shallow rendering" like enzyme does, it can be used with shallow rendering and full mounting techniques to test components in isolation.
Interact with Components:
The package lets you find components, trigger events, and inspect state changes, allowing for detailed tests on how components behave in various conditions.
DOM Manipulation:
It provides methods to simulate real user events, such as click, focus, and change, and lets you inspect how components respond.
Commonly Used Methods:
Here are some of the common methods in ReactTestUtils:

import React from 'react';
import { render } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; // Import ReactTestUtils
import MyButton from './MyButton';

describe('<MyButton />', () => {
  it('should handle button click', () => {
    const component = ReactTestUtils.renderIntoDocument(<MyButton />);
    const button = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'my-button');
    
    // Simulate a click event
    ReactTestUtils.Simulate.click(button);
    
    // Check the result of the click
    expect(component.state.clicked).toBe(true); // Assuming `clicked` is updated on click
  });
});


//When to Use ReactTestUtils:
Unit Testing: It is especially useful for unit testing individual React components, where you simulate interactions and check for state changes.
Simulating Events: It provides a simple way to simulate native DOM events, which can be helpful in testing user interactions like form submissions, button clicks, and input changes.
Testing Component Behavior: ReactTestUtils is useful when you need to test how components handle events, trigger state changes, and re-render in response to different user interactions.
Legacy React Codebases: If you're working with an older React codebase, ReactTestUtils may still be in use for testing before more modern tools like React Testing Library and Enzyme became widely adopted.








    
