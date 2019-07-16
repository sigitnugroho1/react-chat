import React from 'react';


class Coment extends React.Component {
    constructor(props) {
        super(props)
        this.handlePost = this.handlePost.bind(this)
    }

    handlePost(e) {
        e.preventDefault()
        const _id = null
        const nama = e.target.elements.nama.value.trim()
        const chat = e.target.elements.coment.value.trim()
        this.props.handlePost(_id, nama, chat)
        e.target.elements.nama.value = ''
        e.target.elements.coment.value = ''
    }

    render() {
        return (
            <div className="row" style={{ marginTop: 20, padding: 10, backgroundColor: "#AFEEEE" }}>
                <div className="col-md">
                    <form onSubmit={this.handlePost}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="nama" placeholder="your name" />
                            <textarea className="form-control mt-2" name="coment" placeholder="write your chat here ...." rows="3" />
                            <button className="btn btn-primary mt-2">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default Coment;