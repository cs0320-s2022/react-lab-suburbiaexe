import React from 'react';
import './App.css';

function TextBox(props: any) {
    const handle = (event : any) => {
        props.change(event.target.value)
    }

    return (
        <div>
            <label>
                {props.label}
                <input type="text" onChange={handle} />
            </label>
        </div>
    );
}

export default TextBox;