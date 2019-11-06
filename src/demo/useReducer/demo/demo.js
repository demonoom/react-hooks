import React from 'react'
import ShowArea from "./showArea";
import Buttons from "./Buttons";
import {Color} from "./color";

const Demo = () => {
    return (
        <div>
            <Color>
                <ShowArea/>
                <Buttons/>
            </Color>
        </div>
    )
}

export default Demo