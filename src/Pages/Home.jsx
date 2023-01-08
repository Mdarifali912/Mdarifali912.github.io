import React from 'react'




const Home = () => {
  return (
    <>
    {/* <img style={{margin:"auto",width:"80%",height:"300px"}} src="" alt="" /> */}
    <div style={{display:"flex"}}>
      <h1 style={{margin:"auto", fontFamily:"monospace",marginTop:"30px",fontSize:"30px",textShadow: "2px 2px 17px #02054B",fontWeight:"lighter",}}>Hey Folks, <span>My Name is Md Arif Ali</span></h1>
    
    </div>
    <div style={{display:"flex"}}>

    <h3 style={{margin:"auto", fontFamily:"monospace",marginTop:"5px",fontSize:"26px",textShadow: "2px 12px 40px #02054B",fontWeight:"revert-layer"}}>Full stack web developer</h3>

    </div>
    <div >
      <p style={{margin:"auto", fontFamily:"monospace",marginTop:"35px",fontSize:"22px",textShadow: "2px 2px 30px #02054B",fontWeight:"revert-layer",}}>Full stack web developer with experience in developing full-stack web applications using HTML,CSS,JavaScript, React and Node.js.</p>
      
      </div>
      <button style={{display:"start",fontFamily:"monospace",fontSize:"18px", margin:"auto",backgroundColor:"#02054B",color:"white",marginTop:"60px",padding:"5px",height:"40px",borderRadius:"10px",width:"9%",textAlign:"center"}}>Resume</button>
    </>
  )
}

export default Home