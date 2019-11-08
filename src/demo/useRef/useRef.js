/**
 * 1.用useRef获取React JSX中的DOM元素，获取后你就可以控制DOM的任何东西了。但是一般不建议这样来作，React界面的变化可以通过状态来控制。
 * 2.用useRef来保存变量，这个在工作中也很少能用到，我们有了useContext这样的保存其实意义不大
 */
import React, {useRef, useState, useEffect} from 'react'

const UseRefComponent = () => {
    const inputEl = useRef()

    const buttonCli = () => {
        inputEl.current.value = 'fun plus'
        console.log(inputEl);
    }

    const [text, setText] = useState('')
    const textRef = useRef()

    useEffect(() => {
        textRef.current = text
        console.log(textRef.current, 'textRef.current');
    })

    return (
        <div>
            <input ref={inputEl} type="text"/>
            <button onClick={buttonCli}>在input上展示文字</button>
            <br/><br/>
            <input value={text} type="text" onChange={(e) => {
                setText(e.target.value)
            }}/>
        </div>
    )
}

export default UseRefComponent