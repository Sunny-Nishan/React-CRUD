import React from 'react';
export default class AddPost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            value: ''
        }
    }
    handleSubmit() {
        console.log("Submit")
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Title : 
                <input type="text" name="name" value={this.state.title} onChange={this.handleC} />
            </label>
            <label>
                Post Body : 
                <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
}