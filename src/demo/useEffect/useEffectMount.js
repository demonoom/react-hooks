import React, {useEffect, useState} from 'react'

const UseEffectMount = () => {
    const [count, setCount] = useState(0)

    /**
     * 我们的这个组件有一个副作用。
     * 给useEffecthook传了一个匿名函数，这个匿名函数就是我们的副作用。
     * 在这里我们打印了一句话，当然你也可以手动的去修改一个DOM元素。
     * 当React要渲染组件时，它会记住用到的副作用，然后执行一次。等React更新了State状态时，它再一次执行定义的副作用函数
     */
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`);
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>clicked me
            </button>
        </div>
    )
}

export default UseEffectMount

/*
*useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而componentDidMonut和componentDidUpdate中的代码都是同步执行的
* */