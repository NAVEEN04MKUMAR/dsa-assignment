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







  
