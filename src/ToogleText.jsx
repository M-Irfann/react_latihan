import { useState } from "react";

export default function ToogleText(){
    const [isVisible, setIsVisible] = useState(false)

    const handleToogle = () => {
        setIsVisible(!isVisible)
    }

    return (
        <>
            <h2>Learn Toogle show/hide</h2>
            <button onClick={handleToogle}>
                {isVisible ? 'hide' : 'show'} teks
            </button>

            {isVisible && <p>Ini adalah paragraf yang bisa disembunyikan atau ditampilkan.</p>}
        </>
    )
}