import 'isomorphic-fetch';
import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css';


class CreateArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: [],
    };
  }

  handleSubmitClick = () => {
    const confirm = window.confirm('確定要新增文章嗎？');
    if (confirm) {
      const body = this.body;
      fetch()
    }
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
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* tags */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* content */}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticlePage;
