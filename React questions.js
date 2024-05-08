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



