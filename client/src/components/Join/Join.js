import React, { useState, useEffect } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';

import './Join.css';

const Join  = withRouter(({ history }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [color, setColor] = useState('seablue');

    const [colorState, setColorState] = useState({
        softlime: 'noclass',
        seablue: 'active',
        orange: 'noclass',
        magenta: 'noclass',
        redorange: 'noclass',
        yellow: 'noclass',
        deepblue: 'noclass'
    })

    // collects user name and room and pushes to URL
    const submitHandler = (event) => {
        if (!name || !room){
            event.preventDefault()
        } else {
            history.push(`/chat?name=${name}&room=${room}`)
        }
    }

    const colorHandler = (event) => {
        let newColor = event.target.id
        let prevColor = color
        console.log('new color:', newColor)

        console.log('current colorState:', colorState)
        
        setColorState({
            ...colorState,
            [prevColor]: 'noclass',
            [event.target.id]: 'active'
        })

        console.log('new colorState:', colorState)

        setColor(`${event.target.id}`)

        console.log('current color:', color)
    }


    return(
        <div className="joinOuterContainer">
            <form className="joinInnerContainer" onSubmit={submitHandler}>
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value) } />
                </div>

                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value) } />
                </div>

                <div className="colors">
                    {/* <div className={`circles ${active? 'active': null}`} id="softlime" onClick={colorHandler}></div> */}

                    <div className={`circles ${colorState.softlime}`}
                    id="softlime"
                    onClick={colorHandler}
                    ></div>

                    <div className={`circles ${colorState.seablue}`}
                    id="seablue"
                    onClick={colorHandler}></div>

                    <div className={`circles ${colorState.orange}`}
                    id="orange"
                    onClick={colorHandler}></div>

                    <div className={`circles ${colorState.magenta}`}
                    id="magenta"
                    onClick={colorHandler}></div>

                    <div className={`circles ${colorState.redorange}`}
                    id="redorange"
                    onClick={colorHandler}></div>

                    <div className={`circles ${colorState.yellow}`}
                    id="yellow"
                    onClick={colorHandler}></div>

                    <div className={`circles ${colorState.deepblue}`}
                    id="deepblue"
                    onClick={colorHandler}></div>
                </div>
                {/* end colors */}

                    <button id="color" className="button mt-20" type="submit">sign in</button>
            </form>
        </div>
    )
}
)

export default Join;