import React from 'react';
import ReactDOM from 'react-dom';
import TraditionComponent from "./demo/traditionComponent";
import HooksComponent from "./demo/hooksComponent";
import UseStateComponent from './demo/userState/useState'
import TraditionMount from './demo/useEffect/traditionMount'
import UseEffectMount from './demo/useEffect/useEffectMount'
import UseEffectUnmount from './demo/useEffect/useEffectUnmount'
import UseContextComponent from './demo/useContext/useContext'
import UseReducerComponent from "./demo/useReducer/useReducerComponent";
import Demo from './demo/useReducer/demo/demo'
import UseMemoComponent from './demo/useMemo/useMemo'
import UseRefComponent from './demo/useRef/useRef'
import GetWinSize from './demo/customizeHooks/getWinSize'

ReactDOM.render(<GetWinSize />, document.getElementById('root'));

