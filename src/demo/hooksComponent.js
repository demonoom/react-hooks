import React, {useState} from 'react'

const HooksComponent = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You Clicked {count} times</p>
            <p>hooksComponent</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>click me
            </button>
        </div>
    )
}

export default HooksComponent