import React from 'react';

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      tool: '',
      description: '',
      url: '',
      cost: '',
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
    if(this.props.view.page === 'addSubmission') {
      // create a post
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editSubmission') { // else if the view is editPost
      // update the post
      this.props.handleUpdate(this.state)
    }
  }
  componentDidMount() {
    this.setState({
      title: this.props.formInputs.title,
      tool: this.props.formInputs.tool,
      description: this.props.formInputs.description,
      url: this.props.formInputs.url,
      cost: this.props.formInputs.cost,
      id: this.props.formInputs.id
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" placeholder="add title" id="title" value={this.state.title} onChange={this.handleChange}></input>

        <label htmlFor="tool">Tool: </label>
        <input type="text" id="tool" placeholder="name of tool"value={this.state.tool} onChange={this.handleChange}></input>

        <label htmlFor="description">Description: </label>
        <input type="text" id="description" placeholder="add a description" value={this.state.description} onChange={this.handleChange}></input>

        <label htmlFor="url">URL: </label>
        <input type="text" id="url" placeholder="url" value={this.state.url} onChange={this.handleChange}></input>

        <label htmlFor="cost">Cost: </label>
        <input type="number" id="cost" placeholder="cost" value={this.state.cost} onChange={this.handleChange}></input>

        <input type="submit" value="submit"></input>
      </form>
    )
  }
}


export default Form;
