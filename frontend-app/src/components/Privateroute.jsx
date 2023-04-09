import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'
import { isLoggedIn } from '../auth';
const Privateroute=()=> {

  // if(isLoggedIn()){
  //   return <Outlet/>
  // }
  // else{
  //   return <Navigate to={"/login"}/>
  // }

  // or write this way;

  return isLoggedIn() ? <Outlet/> : <Navigate to={"/login"} />
}

export default Privateroute