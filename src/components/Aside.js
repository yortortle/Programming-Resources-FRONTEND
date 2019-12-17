import React from 'react';

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside-container">
        <h1 className="asideNav"> NAVIGATION </h1>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>Home</li>
          <li onClick={() => {this.props.handleView('addSubmission')}}>New Resource</li>
          <li onClick={() => {this.props.handleView('snippets')}}>Snippets</li>
          <li onClick={() => {this.props.handleView('addSnippet')}}>New Snippet</li>
        </ul>
      </aside>
    )
  }
}


export default Aside;
