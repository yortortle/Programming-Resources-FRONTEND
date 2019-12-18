// =============================
// DEPENDENCIES
// =============================
import React from 'react';

// =============================
// COMPONENT CLASS: SUBMISSION
// =============================
class Submission extends React.Component {
  render() {
    return (
      <article>
        <div className="submission">
          <div className="submission-header">
            <h1>{this.props.submissionData.title}</h1>
            <h4>Learning Objective: {this.props.submissionData.tool}</h4>
            <h4>Cost: {this.props.submissionData.cost}$</h4>
          </div>
          <div className="submission-body">
            <h4>Description</h4>
            <p>{this.props.submissionData.description}</p>
            <a href={this.props.submissionData.url} target="_blank" rel="noopener noreferrer">Link to Resource</a>
          </div>
          <div className="submission-options">
            <ul className="submission-list">
              <li className="subEdit" onClick={() => {
                this.props.handleView('editSubmission', this.props.submissionData)}}>
                edit submission</li>
              <li className="subDelete" onClick={() =>  {this.props.handleDelete(this.props.submissionData.id)}}>delete submission</li>
            </ul>
          </div>
        </div>
      </article>
    )
  }
}

// =============================
// EXPORT COMPONENT: SUBMISSION
// =============================
export default Submission;
