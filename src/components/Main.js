// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';

// Components
import Submission from './Submission.js'
import Snippet from './CodeSnippet.js'
import Form from './Form.js'
import Form2 from './Form2.js'

// =============================
// LINK TO CONNECT TO API
// =============================
let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://cors-anywhere.herokuapp.com/https://serene-atoll-56752.herokuapp.com'
} else {
  console.log('this is for heroku');
}

// =============================
// COMPONENT CLASS: MAIN
// =============================
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submissions: [],
      snippets: []
    }
  }

  // Function to fetch submissions from API
  fetchSubmissions = () => {
    fetch(`${baseUrl}/submissions`)
    .then(data => data.json())
    .then(jsonData => {
      this.setState({
        submissions: jsonData
      })
    }).catch(error => console.log(error))
  }

  //fetch snippets
  fetchSnippets = () => {
    fetch(`${baseUrl}/snippets`)
    .then(data => data.json())
    .then(jsonData => {
      this.setState({
        snippets: jsonData
      })
    }).catch(error => console.log(error))
  }

  //function to handle creation of new submissions
  createSubmission = (createData) => {
    fetch(`${baseUrl}/submissions`, {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdPost => {
      return createdPost.json()
    })
    .then(jsonedPost => {
      console.log(this.props);
      this.props.handleView('home')
      this.setState(prevState => {
        prevState.submissions = jsonedPost
        return { submissions: prevState.submissions }
      })
    })
    .catch(err => console.log(err))
  }

  createSnippet = (createData) => {
    fetch(`${baseUrl}/snippets`, {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdPost => {
      return createdPost.json()
    })
    .then(jsonedPost => {
      console.log(this.props);
      this.props.handleView('snippets')
      this.setState(prevState => {
        prevState.snippets = jsonedPost
        return { snippets: prevState.snippets }
      })
    })
    .catch(err => console.log(err))
  }

  //function to handle update of submissions
  updateSubmission= (updateData) => {
    fetch(`${baseUrl}/submissions/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedPost => {
        // switch back to the home view after editing a post
        this.props.handleView('home')
        this.fetchSubmissions()
      })
      .catch(err => console.log(err))
  }

  updateSnippet= (updateData) => {
    fetch(`${baseUrl}/snippets/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedPost => {
        // switch back to the home view after editing a post
        this.props.handleView('snippets')
        this.fetchSnippets()
      })
      .catch(err => console.log(err))
  }

  deleteSubmission = (id) => {
    fetch(`${baseUrl}/submissions/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(json => {
        this.setState(prevState => {
          const submissions = prevState.submissions.filter(submission => submission.id !== id)
          return { submissions }
        })
      })
      .catch(err => console.log(err))
    }

  deleteSnippet = (id) => {
      fetch(`${baseUrl}/snippets/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then(json => {
          this.setState(prevState => {
            const snippets = prevState.snippets.filter(snippet => snippet.id !== id)
            return { snippets }
          })
        })
        .catch(err => console.log(err))
    }

  // Lifecycle function to pull data to render at page load
  componentDidMount() {
    this.fetchSubmissions()
    this.fetchSnippets()
  }

  // Render function
  render () {

    //series of conditionals to determine which view to display
    let view1;
    if (this.props.view.page === 'home') {
      view1 = this.state.submissions.map((submissionData) => (
          <Submission
            handleView={this.props.handleView}
            key={submissionData.id}
            submissionData={submissionData}
            handleDelete={this.deleteSubmission}
          />
        ))
    }
    else if (this.props.view.page === 'snippets'){
      view1 = this.state.snippets.map((snippetData) => (
          <Snippet
            handleView={this.props.handleView}
            key={snippetData.id}
            snippetData={snippetData}
            handleDelete={this.deleteSnippet}
          />
        ))
    }
    else if (this.props.view.page === 'editSubmission'){
      view1 = <Form
        handleUpdate={this.updateSubmission}
        handleCreate={this.createSubmission}
        formInputs={this.props.formInputs}
        view={this.props.view}
      />
    }
    else if (this.props.view.page === 'addSubmission'){
      view1 = <Form
        handleUpdate={this.updateSubmission}
        handleCreate={this.createSubmission}
        formInputs={this.props.formInputs}
        view={this.props.view}
      />
    }
    else if (this.props.view.page === 'editSnippet' || 'addSnippet'){
      view1 = <Form2
        handleUpdate={this.updateSnippet}
        handleCreate={this.createSnippet}
        formInputs2={this.props.formInputs2}
        view={this.props.view}
      />
    }

    return (
      <main>
      <h1>{this.props.view.pageTitle}</h1>
      {view1}
      </main>
    )
  }
}

// =============================
// EXPORT COMPONENT: MAIN
// =============================
export default Main;
