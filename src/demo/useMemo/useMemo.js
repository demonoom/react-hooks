import React, {useState, useMemo} from 'react'

const UseMemoComponent = () => {
    const [xiaohong, setXiaohong] = useState('小红待客状态')
    const [zhiling, setZhiling] = useState('志玲待客状态')

    return (
        <>
            <button onClick={() => {
                setXiaohong(new Date().getTime())
            }}>小红
            </button>
            <button onClick={() => {
                setZhiling(new Date().getTime() + ',志玲向我们走来了')
            }}>志玲
            </button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}

const ChildComponent = ({name, children}) => {
    function changeXiaohong(name) {
        console.log('小红向我们走来了')
        return name + ',小红向我们走来了'
    }

    /**
     * 使用useMemo，然后给她传递第二个参数，参数匹配成功，才会执行
     */
    const actionXiaohong = useMemo(() => changeXiaohong(name), [name])

    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default UseMemoComponent