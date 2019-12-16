// =============================
// DEPENDENCIES
// =============================
import React from 'react';

// =============================
// COMPONENT CLASS: SUBMISSION
// =============================
class Snippet extends React.Component {
  render() {
    return (
      <article>
        <div className="codeSnippet">
          <div className="snippet-header">
            <h2>Snippet: {this.props.snippetData.title}</h2>
          </div>
          <div className="snippet-body">
            <h3>Description</h3>
            <p>{this.props.snippetData.description}</p>
          </div>
          <div className="snippet-options">
            <ul className="snippet-list">
              <li className="snipedit" onClick={() => {
                this.props.handleView('editSnippet', this.props.snippetData)}}>
                edit snippet</li>
              <li className="snipdelete" onClick={() =>  {this.props.handleDelete(this.props.snippetData.id)}}>delete snippet</li>
            </ul>
          </div>
        </div>
      </article>
    )
  }
}

// =============================
// EXPORT COMPONENT: SNIPPETS
// =============================
export default Snippet
