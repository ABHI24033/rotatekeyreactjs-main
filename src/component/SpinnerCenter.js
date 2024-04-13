import React from 'react'
import Eclipse from '../component/images/Eclipse.gif';
import Spinr from "../component/Spinr.css"
const SpinnerCenter = () => {
  return (
    <div class='loaders'>
       <img src={Eclipse} alt="Loading" />
    </div>
  )
}

export default SpinnerCenter