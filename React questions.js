1.what is react?
  it the javascript libarary,resusable component.

2.about mvc?
  it is framework where the
  model-data or the business logic 
  view-reusable component(ui)
  controller-handle the user input,update the view  and the update the model.
  
    // Model: Stateful component representing the data
import React, { useState } from 'react';

//Counter component serves as both the model (holding the state) and the controller (handling user interactions).
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// View: Component representing the UI
function App() {
  return (
    <div>
      <h1>React MVC Example</h1>
      <Counter />
    </div>
  );
}

export default App;

3.How state are managed?
   In React, state can be managed locally within components using the useState hook or globally using state management libraries like Redux or Context API.

4.building blocks of react?





  
  
5.state and prop:
state:

import React,{Component} from 'react';
class Classcomponent extends Component{
  constructor(props){
    super(props);
    this.state={
     count:0
    };
  }
  //we can change throuh the setstate
  //we can access the state by the this.state
  //usage we have such as the dynamic data
  incrementcount=()=>{
    this.setState({count:this.state.count+1});
  };

render(){
  return(
    <div>
    <p>Count:{this.state.count}</p>
    <button onClick={this.incrementcount}>Increment</buttom>
    </div>
  );
  }
}

prop:
//pass the data from parant to child
//immutable we cant modify this one when we are receiving this one
//functional components we are used the props

import Childcomponent from './Childcomponent';

function Parantcomponent(){
  return <Childcomponenet name="john"/>; 
}

function ChildComponent(props) {
  return <p>Hello, {props.name}!</p>;
}

6.Virtualdom:
improve the performance and the minimise the dom opration
1.initial render:first render at the react,then react craete thevirtual dom 
2.update:if any state or prop are change the we need to create the new virtual do representationof the component.
3.diffing:compare the new virtual dom to the previous one vdom
4.reconciliation:calculate the minimal set of changes to update the real dom to match the new virtual dom


7.about JSX?
  syntex extension for javascript uses in react
  we can write the HTML like code directly within the javascript

import React from 'react';
//here we write the HTML code here wit the javascript
const element=<h1>hello world<h1>;
ReactDOM.render(element,document.getElementById('root'));


8.React compnent:
reusable code blocks contains the logics and ui elements
ui broken into small pieces called components
types:
functional,class components:

functional components same as javascript:
function welcome(){
  return <h1>hello naveen</h1>
  }
//it will useful where there is less interaction like static ui

class components:it can access the data of other components:
syntex:
    class Democomponent extents React.Componenst{
  render(){
    return <h1>welcome message</h1>
  }
  }
//class component have the less efficient than the functional components

9.how browser read the jsx:
browser does not capable read the jsx,but it can read the javascript
but with help of the transpiler we convert the jsx into the javascript then we read

10.can you print the hello world?
//syntex
  function Component(){
    dosomething(e){
      e.preventDefault();
    }
    return(
      <button onEvent={dosomething}></button>
    );
  };






  11.create the event in the react:
during event user interactions plays a role,interaction like the mouse clicks,keypress, or battary to the charger

import React from 'react';
function App(){
  function eventhandler(){
    alert('naveen surely will be a good problem solver');
  }
  return(
    <div className='App'>
      <h1>Just Recurit Naveen</h1>
      <button onClick={eventhandler}>Click for alert</button>
    </div>
  )

}

export default App;

  12.List in the React:
  
 import React from 'react';
 import ReactDOM from 'react-dom';

 class Numberlist extends React.Component{
  render(){
    const numbers=[1,2,3,4,5];//stored in array
    //iterating over the each element in the array through map
    <li key={number}>{number}</li>
    const listitems=numbers.map((number)=>{
    });
    return (
      <ul>
        {listitems}
      </ul>
    );
  }
 }
 ReactDOM.render(
  <Numberlist/>,
  document.getElementById('root')
 );

13.About Keys:
//we should include when we create the list of elements in React
//it will helpful to get the which itemsare eleted,changed or updated
//unique ness o the keys  is that we have the unique element within the array not globally
import React from "react";
import ReactDOM from"react-dom/client";

function Menuitems(props){
    const item=props.item;
    return <li>{item}</li>
}

//component will return unordered list
function Navmenu(props){
const list=props.menuitems;
const updatedlist=list.map((listitems)=>{
 return <Menuitems key={listitems.toString()} item={listitems}/>;
});
return <ul>{updatedlist}</ul>
}

function App(){
    const menuitems1=[1,2,3,4,5];
    const menuitems2=[1,2,3,4,5];
    return (
        <React.StrictMode>
            <Navmenu menuitems={menuitems1}/>
            <Navmenu menuitems={menuitems2}/>
        </React.StrictMode>
    )
}

// Exporting the App component as the default export
export default App;

// Rendering the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

13.write comments in react:
  //it is represent that single line comment //
  //multiline comment that /**/

14.difference between the react and angular:
     performance:
            react:one way data binding ,provides the better performance for dynamic application
            angular:uses the realdom

     data binding:
            react:one way data binding easy to debug and understand 
            angular:two way data binding so changes in the UI reflected in the model and vice versa
      
    language:
            react:whhich we have uses in the javascript,developed by facebook
            angular:we are used in the typescript and the developed by the google
            
  15.About render:
  import React,{Component} from "react";

export default class App extends Component{
    state={
        pawridays:[
            {id:"123",Day:"monday"},
            {id:"234",Day:"wednesday"},
            {id:"345",Day:"thrusday"},
        ],
    };
  
    //purpose of the render is that we the HTML code inside the render function 
    render(){
        const partydays=this.state.pawridays.length;
        const style={
            textAlign:"center",
            color:"green",
        };
      
        return(
            <div style={style}>
                <h1>I am user</h1>
                <p>we party:{partydays} days a week</p>
            </div>
        );
      
    }
}

16.Abouts state in the react:
//State is a way to store and manage the data
//State of a component is an object that holds some information that may change the over the lifetime of the component

  import React,{Component} from "react";
//   import ReactDOM from "react-dom/client";

export default class App extends Component{
   constructor(props){
    super(props);
    this.state={
       count:0,
    };
   }

  increment=()=>{
    this.setState((prevState)=>({
       count:prevState.count+1,
    }));
   };
  
   decrement=()=>{
    this.setState((prevState)=>({
       count:prevState.count-1,
    }));
   };
  
   //takes the single parameter expect the contain the e of values to be updated
   //update the state in react it is the independent it mean multiple attribute is present then we can include the very subset of the attributes ,once update is ver then render will call this one
  
  render(){
        return(
            <div>
                <h1>The currrent count is:{" "}
                {this.state.count}
                </h1>
                <button onClick={this.increment}>
                    increase
                </button>
                <button onClick={this.decrement}>
                    decrease
                </button>
            </div>
        );
      
    }
}

17.About props:
//props mean we are pass the information to the component 
//props means that it is the object where the we are using this one at the inside a component

//for the class absed value we need the this keyword access te data
  import React,{Component} from "react";
//   import ReactDOM from "react-dom/client";

export default class App extends Component{
   
  
  render(){
        return(
            <div>
                <h2>Hello {this.props.user}</h2>
                <h3>hello naveen</h3>
            </div>
        );
      
    }
}

//when we use the class that time it si not required the cthis keyword access the data
  import React from "react";
//   import ReactDOM from "react-dom/client";

export default function App (props){
        return(
            <div>
                <h2>Hello {props.user}</h2>
                <h3>hello naveen</h3>
            </div>
        );  
    }



  import React from "react";
//   import ReactDOM from "react-dom/client";

export default class App extends React.Component{
    render(){
            return(
            <div>
                <h2>we are inside the parant component </h2>
                <Child name="user" userid="1111"/>
            </div>
        );  
    } 
    
}

 class Child extends React.Component{
    render(){
     console.log(this.props);
            return(
            <div>
                <h2>Hello,{this.props.name}</h2>
                <h3>We are at the inside the Child component</h3>
                <h3>Our user id is the {this.props.userid}</h3>
            </div>
        );  
    } 
    
}





//functional component
// const Car=()=>{
//     return <h2>Hi Myself Naveen kumar</h2>
// }
import React,{useState} from "react";
const Functionalcomponent=()=>{
    const [count,setCount]=useState(0);

    const increase=()=>{
        setCount(count+1);
    }
    
    return(
        <div>
            <h1>Welcome to recurit Naveen</h1>
            <h3>Counter app using Functionalcomponent</h3>        
            <h2>{count}</h2>
            <button onClick={increase}>Add</button>
        </div>

    )
}
export default Functionalcomponent;

//functional
constructr are not used
hooks are used for to make stateful
ru from top to bottom
no render is used
plain js accept props as arguements ad return react element




//class based component
import React,{Component} from "react";
class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        };
        this.increase=this.increase.bind(this);
    }
    increase(){
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
        <div>
            <h1>Welcome to recurit Naveen</h1>
            <h3>Counter app using classcomponent</h3>        
            <h2>{this.state.count}</h2>
            <button onClick={this.increase}>Add</button>
        </div>
      )
    }   
  }
export default ClassComponent;



20.about render:

//app.js
import React,{useState} from 'react';
import Childcomponent from './Childcomponent.js';

function App(){
    const[message,setmessage]=useState('hello world');
    return(
        <div>
        <h1>Parant component</h1>
        <button onClick={()=>setmessage('hello naveen')}>change message</button>
        <Childcomponent message={message}/>
        </div>
    );
}

export default App; 

//Childcomponent.js
import React from 'react';

function Childcomponent({message}){

    return(
        <div>
            <h2>Childcomponent</h2>
            <p>{message}</p>
        </div>

    );
}
export default Childcomponent;

//INTERMEDIATE QUESTIONS REACT RENDERING
//21
import React from "react";
import ReactDOM from "react-dom";

function Message(props){
    if(props.isloggedin)
        return <h1>Welcome User</h1>
    else
        return <h1>Please login</h1>
}

function Login(props){
    return <button onClick={props.clickFunc}>login</button>
}

function Logout(props){
    return <button onClick={props.clickFunc}>logout</button>
}

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={isloggedin:false};
        this.ifloginclicked=this.ifloginclicked.bind(this);
        this.iflogoutclicked=this.iflogoutclicked.bind(this);
    }
    ifloginclicked(){
        this.setState({isloggedin:true});
    }
     iflogoutclicked(){
        this.setState({isloggedin:false});
    }

    render(){
        return(
            <div>
            <Message isloggedin={this.state.isloggedin}/>
            {this.state.isloggedin?(
                <Logout clickFunc={this.iflogoutclicked}/>
            ):(<Login clickFunc={this.ifloginclicked}/>
            )}
            </div>
        );
    }

}
ReactDOM.render(<Homepage />, document.getElementById("root"));

//22.About react router:


//app.js
components of the react:
//Browser router:it will push,replace,and pop,it store te all other components
//Routes:
//Route:render some ui when path match the current url
//Link:create link to different routes
import React,{Component} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./components/home.js";
import Contact from "./components/contact.js";
import About from "./components/about.js";


class App extends Component{
    render(){
        return(
            <Router>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                         <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/contact" element={<Contact/>}></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;


//about.js
import React from "react";

function About(){
    return(
        <div>
            <h2>
                Naveenkumar is a Computer science Engineer right now
            </h2>
        </div>
    );
}
export default About;

//Contact.js
import React from "react";

function Contact(){
    return(
        <address>
            Porur<br/>
            chennai 600 026<br/>
            or<br/>
            Anna cenetaory library  at guindy
        </address>
    );
}
export default Contact;

//Home.js
import React from "react";

function Home(){
    return(
       <h1>Welcome to the recurit Naveenkumar</h1>
    );
}
export default Home;


23.About react life cycle

//2.Mounting:
class Test extends React.Component{
  constructor(props){
    super(props);
    this.state={hello:"world!"};
  }
  // //static get Derived State from Props
  // static getDerivedStateFromProps(props,state){
  //   return {hello:props.greet};
  // }

  //componentDidMount() for this one this funtion is invoked right after the render() function is executed for the first time
  componentDidMount(){
    this.setState({hello:" Geeks!"});
  }
  render(){
    return(
      <div>
        <h1>
          Naveenkumar
          {this.state.hello}
        </h1>
      </div>
    )
  }

}

 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Test greet=" Geeks!"/>);
//.3.Updating:

//getDerivedStateFromProps
//we will get the My name is sachin
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <div>
                <Child name="sachin"></Child>
            </div>
        )
    }
}

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"naveen"
        };
    }
    static getDerivedStateFromProps(props,state){
        if(props.name!==state.name){
            return{
                name:props.name
            };
        }
        return null;
    }

    render(){
        return(
            <div>My name is {this.state.name}</div>
        )
    }
}

export default App;




//it will change to the click the button on receive message to the geeks for the geeks welcome you
//setstate
import React,{Component} from "react";
class App extends Component{
    constructor(props){
        super(props);
        this.state={
           greeting:"Click the button on receive message",
        };
        this.updateState=this.updateState.bind(this);
    }
    

    updateState(){
        this.setState({
            greeting:"Geeks for geeks welcome you"
        });
    }

    render(){
        return(
            <div>
                <h2>Greeting portal</h2>
                <p>{this.state.greeting}</p>
                <button onClick={this.updateState}>Click me</button>      
            </div>
        );
    }
}

export default App;



