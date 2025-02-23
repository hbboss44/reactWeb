// import 'ldrs/ring'
import { ripples } from 'ldrs'
import { useEffect } from 'react';
import { useState } from 'react';
import '../project/home.css'
const Home = () => {
    ripples.register()
    let [load,setload]=useState(true)
    useEffect(()=>{       
        setTimeout(() => {
             setload(false)
        }, 5000);
    })
    return (  <>
        

        <>
        {
            load?<div className='center-ripples'><l-ripples
            size="150"
            speed="2"
            color="#000"
            ></l-ripples></div>:<h1>Welcome to class</h1>
        }
        </>


    </>);
}
 
export default Home;