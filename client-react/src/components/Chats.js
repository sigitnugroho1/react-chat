import React from 'react';
import Chat from './Chat';


// tanpa  
const Chats = (props) => {
    return (
        <div className="row overflow-auto" style={{ height: 450, backgroundColor: "#F0FFFF" }}>
            <div className="col-md">
                {props.options.map((option, i) => (
                    <Chat
                        key={i}
                        nameText={option.name}
                        chatText={option.chat}
                        _id={option._id}
                        handleDelete={props.handleDelete}
                    />
                ))}
            </div>
        </div>
    )
}




export default Chats;