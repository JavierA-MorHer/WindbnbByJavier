import { useState } from "react";


export const useAdult = () => {

  const [counterAdult, setCounterAdult ] =  useState(0);

   function incrementAdult(){
     setCounterAdult(counterAdult +1)
   }
 
   function decrementAdult(){
     setCounterAdult(counterAdult -1)
   }


  return {
    counterAdult,
    incrementAdult,
    decrementAdult
  }
}
