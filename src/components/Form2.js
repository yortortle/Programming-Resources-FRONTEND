import React from 'react';

class Form2 extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      description: '',
      id: null
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }
  handleSubmit = (e) => {
    // prevent default form submit action
    e.preventDefault()
    // if the view is currently addPost
    if(this.props.view.page === 'addSnippet') {
      // create a post
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editSnippet') { // else if the view is editPost
      // update the post
      this.props.handleUpdate(this.state)
    }
  }
  componentDidMount() {
    this.setState({
      title: this.props.formInputs2.title,
      description: this.props.formInputs2.description,
      id: this.props.formInputs2.id
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" placeholder="add title" id="title" value={this.state.title} onChange={this.handleChange}></input>

        <label htmlFor="description">Description: </label>
        <input type="text" id="description" placeholder="add a description" value={this.state.description} onChange={this.handleChange}></input>

        <input type="submit" value="submit"></input>
      </form>
    )
  }
}


export default Form2;
