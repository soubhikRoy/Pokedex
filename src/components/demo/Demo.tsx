import React, { useEffect, useState } from "react"
function Demo() {
    const [count, setCount] = useState(0)
    const [alertMsg, setAlertMsg] = useState("")
    const increaseCount = () => {
        setCount(count + 1)

    }
    useEffect(() => {
        setAlertMsg(prev => prev + "a")

    }, [count])
    return (
        <>
            <h1>Demo</h1>
            <button onClick={increaseCount}>Count increase</button>
            <h2>{count}</h2>
            <h3>{alertMsg}</h3>
        </>
    )
}

export default Demo;