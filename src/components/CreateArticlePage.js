import 'isomorphic-fetch';
import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import TagsInput from 'react-tagsinput';

import 'react-tagsinput/react-tagsinput.css';


class CreateArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: [],
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
  }

  handleSubmitClick = () => {
    const confirm = window.confirm('確定要新增文章嗎？');
    if (confirm) {
      fetch('/api/articles', {
        method: 'POST',
        body: this.state,
      });
    }
  }

  updateTitle = evt => {
    this.setState({
      title: evt.target.value,
    });
  }

  updateContent = evt => {
    this.setState({
      content: evt.target.content,
    });
  }

  updateTags = evt => {
    this.setState({
      tags: evt.target.tags,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-info pull-right"
              role="button"
              onClick={this.handleSubmitClick}
            >送出</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* title */}
            <input onChange={this.updateTitle} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* tags */}
            <input onChange={this.updateTags} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* content */}
            <textarea onChange={this.updateContent} />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticlePage;
