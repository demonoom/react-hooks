import React, {useState, useEffect, useCallback} from 'react'

/**
 * 自定义Hooks函数
 * 一定用use开头
 * @returns {{width: *, height: *}}
 */
const useWinSize = () => {
    /**
     * 先用useState设置size状态
     */
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    /**
     * 修改状态的方法
     * 使用useCallback，为了缓存变量
     * @type {Function}
     */
    const onResize = useCallback(() => {
        setSize(
            {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        )
    }, [])

    /**
     *在第一次进入方法时用useEffect来注册resize监听时间。
     * 为了防止一直监听所以在方法移除时，使用return的方式移除监听
     */
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return size
}

const GetWinSize = () => {
    /**
     * 使用自定义Hooks函数
     * @type {{width: *, height: *}}
     */
    const size = useWinSize()

    return (
        <div>
            窗口的大小是：{size.width}x{size.height}
        </div>
    )
}

export default GetWinSize

/*
* 自定义Hooks函数偏向于功能，
* 而组件偏向于界面和业务逻辑
* */