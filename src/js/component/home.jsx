import React, { useState } from "react";

import Counter from "./counter";


const Home = () => { 
   const[counter,setCounter] = useState(0)
   
      return (
         <Counter/>
         
      )
   };

export default Home;