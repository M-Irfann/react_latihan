import { useRef } from "react"
function UseReff(){

    const message = useRef(null)

    function clickHandler(){
        alert(`hello ${message.current.value}`)
        // console.log(message);
        
    }
    return (
        <>
            <div>
                <input type="text" ref={message} placeholder="Input name"/>
            </div>
            <div>
                <button onClick={clickHandler}>klik me</button>
            </div>
        </>
    )


}

export default UseReff