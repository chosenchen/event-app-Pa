import React from 'react';
import { createStore } from 'redux';
import { CounterReducer } from '../../Reducer/CounterReducer';

class Counter extends React.Component {
  state = {
    title: 'Counter Class',
    counter: 0
  }

  store = createStore(CounterReducer);

   hanldeAdd = () => {
     this.store.dispatch({type: 'increment'});
   };

   hanldeSub =()=>{
    this.store.dispatch({type: 'decrement'});
   }
   componentDidMount(){
    this.store.subscribe(()=> {
      console.log(this.store.getState());
    })
  }

   render(){
    return (
      <section>
        <header>{this.state.title}</header>
        <p>Counter: {this.store.getState().value}</p>
        <button onClick={this.hanldeAdd}>Add</button>
        <button onClick={this.hanldeSub}>Sub</button>
      </section>
    );
   }

 };

export default Counter;
