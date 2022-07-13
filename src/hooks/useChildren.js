import { useState } from 'react'

export const useChildren = () => {

   const [counterChildren, setCounterChildren ] =  useState(0);
 
   function incrementChildren(){
     setCounterChildren(counterChildren +1)
   }
 
   function decrementChildren(){
     setCounterChildren(counterChildren -1)
   }

  return {
    counterChildren,
    incrementChildren,
    decrementChildren
  }
}
