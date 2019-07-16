import React from 'react';
const ReactMarkdown = require('react-markdown')


const Chat = (props) => {
    return (
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-md-1">
                <button className="btn btn-danger rounded-circle" onClick={(e) => {
                    props.handleDelete(props._id)
                }}>-</button>
            </div>

            <div className="col-md-10">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"><ReactMarkdown source={props.nameText} escapeHtml={false} /></h5>
                        <p className="card-text"><ReactMarkdown source={props.chatText} escapeHtml={false} /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Chat