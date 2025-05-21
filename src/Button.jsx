import { useEffect, useState } from "react";

export default function Counter() {
    const [countLike, setCountLike] = useState(0)
    const [countDisLike, setCountDisLike] = useState(0)
    useEffect(()=>{
        console.log(`like ${countLike} | dislike ${countDisLike}`);
        
    },[])
  return (
    <>
        <button onClick={()=>setCountLike(countLike+1)}>like {countLike}</button>
        <button onClick={()=>setCountDisLike(countDisLike-1)}>like {countDisLike}</button>
    </>
  );
}
