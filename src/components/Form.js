import React from 'react';
import Field from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

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
      <Field onSubmit={this.handleSubmit} className="field1">
        {/* <h1>Add A New Resource</h1> */}
        <Field.Group>
          <Field.Text>Title of Resource</Field.Text>
          <Field.Control type="text" placeholder="add title" id="title" value={this.state.title} onChange={this.handleChange}></Field.Control>
        </Field.Group>
        <Field.Group>
          <Field.Text>Programming Language or Technology</Field.Text>
          <Field.Control type="text" id="tool" placeholder="name of tool"value={this.state.tool} onChange={this.handleChange}></Field.Control>
        </Field.Group>
        <Field.Group>
          <Field.Text>Description of video or course</Field.Text>
          <Field.Control type="text" id="description" placeholder="add a description" value={this.state.description} onChange={this.handleChange}></Field.Control>
        </Field.Group>
        <Field.Group>
          <Field.Text>Full URL to resource</Field.Text>
          <Field.Control type="text" id="url" placeholder="url" value={this.state.url} onChange={this.handleChange}></Field.Control>
        </Field.Group>
        <Field.Group>
          <Field.Text>Cost of course in USD</Field.Text>
          <Field.Control type="number" id="cost" placeholder="cost" value={this.state.cost} onChange={this.handleChange}></Field.Control>
        </Field.Group>
        <Field.Group className="submit">
          <Button className="submitBtn" variant="primary" type="submit" value="submit">Submit</Button>
        </Field.Group>
      </Field>
    )
  }
}


export default Form;
