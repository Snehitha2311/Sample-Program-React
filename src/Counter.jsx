import React, { useState } from 'react';

const Counter = (props) => {
    console.log('---render:---', props.children);
    return (
        <div>
            <h2>{props.children} : {props.value}</h2>
        </div>
    )

}
export default React.memo(Counter);