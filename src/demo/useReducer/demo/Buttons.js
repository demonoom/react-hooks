import React, {useContext} from 'react'
import {COLOR_UPDATE, ColorContext} from './color'

const Buttons = () => {
    const {dispatch} = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: COLOR_UPDATE,
                    color: 'red'
                })
            }}>红色
            </button>
            <button onClick={() => {
                dispatch({
                    type: COLOR_UPDATE,
                    color: 'yellow'
                })
            }}>黄色
            </button>
        </div>
    )
}

export default Buttons