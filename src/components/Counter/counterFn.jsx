import React,  {useEffect} from 'react';
import { withEventData } from '../../hoc/withEventData';

import { useEventData } from '../../hooks/useEventData';
const EventCounter=()=> {
   console.log('CounterFn called');
   const [title] = React.useState('Counter Fn !');
   const [counter, setCounter] = React.useState(0);
   const [shouldAlert, setShouldAlert] = React.useState(false);
   const [events] = useEventData(0);
 
   //DIDMOUNT
   useEffect(() => {
     console.log('didMount!');
     return () => {
       console.log('willUnMount');
     };
   }, []);
 
   // DidUpdate + DidMount
   useEffect(() => {
     if (shouldAlert) {
       alert(counter);
       setShouldAlert(false);
     }
   }, [shouldAlert]);
 
   const hanldeClick = () => {
     setCounter((preCounter) => preCounter + 1);
   };
   const handleAlert = () => {
     setTimeout(() => {
       setShouldAlert(true);
     }, 5000);
   };
   return (
     <section>
       <header>{title}</header>
       <p>Counter: {counter}</p>
       <button onClick={hanldeClick}>Add</button>
       <button onClick={handleAlert}>AlertCounterAfter5s</button>
     </section>
   );
 };

const EventCounterConnector = withEventData(EventCounter);

export default EventCounterConnector;
