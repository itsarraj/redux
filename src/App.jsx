import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index';

const App = () => {
    const myState = useSelector((state) => state.change);
    const dispatch = useDispatch();
    return (
        <div>
            <div
                onClick={() => {
                    dispatch(increment);
                }}
            >
                (-)
            </div>
            <input type="text" value={'0'} />
            <div
                onClick={() => {
                    dispatch(decrement);
                }}
            >
                (+)
            </div>
        </div>
    );
};
export default App;
