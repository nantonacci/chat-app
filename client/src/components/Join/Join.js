import React, { useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';

import './Join.css';

const Join  = withRouter(({ history }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const submitHandler = (event) => {
        if (!name || !room){
            event.preventDefault()
        } else {
            history.push(`/chat?name=${name}&room=${room}`)
        }
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

                <div className="radios">
                    <div id="softlime">
                        <input type="radio" id="softlime" name="color" value="softlime" />
                        <label for="softlime"></label>
                    </div>

                    <div id="seablue">
                        <input type="radio" id="seablue" name="color" value="seablue"/>
                        <label for="seablue"></label>
                    </div>

                    <div id="orange">
                        <input type="radio" id="orange" name="color" value="orange"/>
                        <label for="orange"></label>
                    </div>

                    <div id="magenta">
                        <input type="radio" id="magenta" name="color" value="magenta"/>
                        <label for="magenta"></label>
                    </div>

                    <div id="redorange">
                        <input type="radio" id="redorange" name="color" value="redorange"/>
                        <label for="redorange"></label>
                    </div>

                    <div id="yellow">
                        <input type="radio" id="yellow" name="color" value="yellow" />
                        <label for="yellow"></label>
                    </div>

                    <div id="deepblue">
                        <input type="radio" id="deepblue" name="color" value="deepblue"/>
                        <label for="deepblue" ></label>
                    </div>
                </div>
                {/* end radios */}

                    <button id="color" className="button mt-20" type="submit">sign in</button>
            </form>
        </div>
    )
}
)

export default Join;