import "./Component.css";
import {useDispatch , useSelector} from "react-redux";
import { counterActions } from "../store/store";

const Component = ()=>{
   const amount = useSelector((state)=>state.counter.counter)
   const dispatch = useDispatch();
   const decrementBy10kHandler = ()=>{
  dispatch(counterActions.decrementBy10k(10000))
   }
   const decrementBy5kHandler = ()=>{
dispatch(counterActions.decrementBy5k(5000))
   }
return(
   <div className="App">
   <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
   <p className="App__username">Hello, {}! </p>
   <div className="App__amount">
     {`$ ${amount}`}
     <p className="App__amount--info">Total Amount</p>
   </div>

   <section className="App__buttons">
     <button data-amount="10000" onClick={decrementBy10kHandler}>WITHDRAW $10,000</button>
     <button data-amount="5000" onClick={decrementBy5kHandler}>WITHDRAW $5,000</button>
   </section>

   <p className="App__giveaway">Give away all your cash to charity</p>
 </div>
)
}

export default Component;