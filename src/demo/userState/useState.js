/*
* useState是react自带的一个hook函数，它的作用是用来声明状态变量。
* 声明：  const [count,setCount] = useState(0)
*         useState这个函数接收的参数是状态的初始值(Initial state)，
*         它返回一个数组，这个数组的第0位是当前的状态值，第1位是可以改变状态值的方法函数。
*         所以上面的代码的意思就是声明了一个状态变量为count，并把它的初始值设为0，同时提供了一个可以改变count的状态值的方法函数。
* 读取：  {count}
* 改变：  直接调用setCount函数，这个函数接收的参数是修改过的新状态值。接下来的事情就交给React，他会重新渲染组件。
* */


import React, {useState} from 'react'

const UseStateComponent = () => {
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('male')
    const [work, setWork] = useState('stu')

    return (
        <div>
            <p>今年{age}岁</p>
            <p>性别：{sex}</p>
            <p>工作：{work}</p>
        </div>
    )
}

export default UseStateComponent

/*
* React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
* */