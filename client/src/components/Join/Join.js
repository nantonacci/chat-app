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

                {/* <Link onClick={(event) => (!name || !room) ? event.preventDefault : null} to={`/chat?name=${name}&room=${room}`}> */}
                    <button className="button mt-20" type="submit">sign in</button>
                {/* </Link> */}
            </form>
        </div>
    )
}
)

export default Join;