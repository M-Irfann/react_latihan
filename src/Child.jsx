import { memo } from "react";

function Child({name, aksi}){
    console.log('child is rendered');
    return(
        <>
            <h3>Hello {name}</h3>
            <button onClick={aksi}>replace your name</button>
        </>
    )
}

export default memo(Child)

