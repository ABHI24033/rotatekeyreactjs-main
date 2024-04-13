import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { add } from '../../store/Track/trackUserSlice';
const Refundpolicy = () => {
  const disptach=useDispatch()
  useEffect(()=>{
   disptach(add({view:["Refundpolicy"]}))
  },[])
  return (
   <>
   <div className='text-center'>
   <h3>Updated Soon</h3>
   </div>
   </>
  )
}

export default Refundpolicy