// import { useEffect,useState } from "react"

// const ScrollTopButton = () => {
//     const[buttontop,setButtonTop]=useState(false)

//     useEffect(()=>{
//         window.addEventListener("scroll",() =>{
//             if(window.scrollY > 100){
//                 setButton(true)
//             }else{
//                 setButtonTop(false)
//             }
//         })
//     },[])

//     const scrollUp = ()=>{
//         window.scrollTo({
//             top:0,
//             behavior:"smooth"
//         })
//     }
//   return (
//     <>
//     {ScrollTopButton && (
//         <button className="topbtn" style={{
//             position:'fixed',
//             bottom:'90px',
//             right:'50px',
//             height:'50px',
//             width:'50px',
//             fontSize:'50px',
//             background:'red',
//         }} onClick={scrollUp}></button>
//     )}
//     </>
//   )
// }

// export default ScrollTopButton;