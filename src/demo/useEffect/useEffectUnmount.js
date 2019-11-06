import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'

const Index = () => {
    useEffect(() => {
        console.log('useEffect=>Index页面，来了');

        /**
         *  用返回一个函数的形式进行解绑
         *  但是：其实每次状态发生变化，useEffect都进行了解绑。
         *
         *  useEffect的第二个参数，
         *  它是一个数组，数组中可以写入很多状态对应的变量，意思是当状态值发生变化时，我们才进行解绑(才再一次执行useEffect这个函数)。
         *  但是当传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数。
         */
        return () => {
            console.log('Index页面，走了');
        }
        /*
        * 可以理解为：1.直接写在此处的任何函数，本质上都会在第一次以及每一次更新执行
        *             2.而写在返回函数中的任何函数，本质上会在每一次以及卸载时执行
        *             3.第二个参数对1、2的交集（每一次）进行限制
        * */
    }, [])

    return (
        <h2>
            Index Page
        </h2>
    )
}

const List = () => {
    useEffect(() => {
        console.log('useEffect=>List页面，来了');
    })

    return (
        <h2>
            List Page
        </h2>
    )
}

const UseEffectUnmount = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`You clicked ${count} times`);

        return () => {
            console.log('=======');
        }
    }, [count])

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >click me
            </button>


            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index}/>
                <Route path='/list' component={List}/>
            </Router>
        </div>
    )
}

export default UseEffectUnmount