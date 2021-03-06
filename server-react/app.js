var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

require('./db/mongoose')

var chatRouter = require('./routes/chat');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/chat', chatRouter)

module.exports = app



// import React from 'react'
// import Header from './component/Header'
// import Chats from './component/Chats'
// import Coment from './component/Coment'
// import socketIOClient from 'socket.io-client';


// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handlePost = this.handlePost.bind(this)
//         this.handleDelete = this.handleDelete.bind(this)
//         this.socket = socketIOClient('http://localhost:3001');
//         this.state = {
//             options: []
//         }
//     }

//     componentDidMount() {
//         this.socket.on('message', options => {
//             this.setState({ options })
//         })
//     }

//     handlePost(_id, name, chat) {
//         this.setState((prevState) => ({
//             options: prevState.options.concat({ _id, name, chat })
//         }))
//         let json = JSON.stringify({ _id, name, chat })
//         this.socket.emit('chatting', json);
//     }

//     handleDelete(removeChat) {
//         this.setState((prevState) => ({
//             options: prevState.options.filter((option) => {
//                 return !option._id.includes(removeChat)
//             })
//         }))
//         this.socket.emit('deleting', removeChat);
//     }

//     render() {
//         return (
//             <div className="container shadow-lg" style={{ width: 500 }}>
//                 <Header />
//                 <Chats
//                     options={this.state.options}
//                     handleDelete={this.handleDelete}
//                 />
//                 <Coment
//                     handlePost={this.handlePost}
//                 />
//             </div>
//         )
//     }
// }


// export default App;
