import React from 'react';
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Main from './components/Main.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'View Resources'
      },
      formInputs: {
        title: null,
        tool: null,
        description: null,
        url: null,
        cost: null,
        id: null
      }
    }
  }
  handleView = (view, postData) => {
    // declare an empty variable
    let pageTitle = ''
    let formInputs = {
      title: '',
      tool: '',
      description: '',
      url: '',
      cost: '',
      id: null
    }
    let formInputs2 = {
      title: '',
      description: '',
      id: null
    }

    switch (view) {
      case 'home':
        pageTitle = 'View Resources'
        break
      case 'snippets':
        pageTitle = 'View All Code Snippets'
        break
      case 'addSubmission':
        pageTitle = 'New Submission'
        break
      case 'addSnippet':
        pageTitle = 'New Code Snippet'
        break
      case 'editSubmission':
        pageTitle = 'Edit Submission'
        formInputs = {
          title: postData.title,
          tool: postData.tool,
          description: postData.description,
          url: postData.url,
          cost: postData.cost,
          id: postData.id
        }
        break
      case 'editSnippet':
        pageTitle = 'Edit Code Snippet'
        formInputs2 = {
          title: postData.title,
          description: postData.description,
          id: postData.id
        }
        break
      default:
        break
    }

    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs,
      formInputs2: formInputs2
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Aside handleView={this.handleView}/>
          <Main
            handleView={this.handleView}
            formInputs={this.state.formInputs}
            formInputs2={this.state.formInputs2}
            view={this.state.view}
          />
        </div>
      </div>

    )
  }
}


export default App;
