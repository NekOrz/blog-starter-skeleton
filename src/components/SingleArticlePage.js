import 'isomorphic-fetch';
import React, { Component, PropTypes } from 'react';
import ReactQuill from 'react-quill';

class SingleArticlePage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: [],
      isEditing: false,
    };
  }

  componentDidMount() {
    // fetch with id
    const id = this.props.id;
    fetch(`/api/articles/${id}`)
      .then(res => res.json())
      .then(json => {
        this.setState(json);
      });
  }

  componentDidUpdate() {
    // fetch with id
  }

  handleTagsChange = () => {};

  handleTitleChange = () => {};

  handleDelClick = () => {};

  handleEditClick = () => {};

  renderTitle = () => {};

  renderTags = () => {
    const { isEditing, tags } = this.state;
    if (isEditing) {

    }
  };

  renderContent = () => {
    const { isEditing, content } = this.state;
    if (isEditing) {
      return (
        <ReactQuill
          theme="snow"
          value={content}
          onChange={this.onEditorChange}
          className={'article-main'}
        />
      );
    }
    return (
      <div
        className="article-main"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  };

  render() {
    const { isEditing } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              {this.renderTitle()}
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-md-12">
            {this.renderTags()}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {this.renderContent()}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-info"
              role="button"
              onClick={this.handleEditClick}
            >{isEditing ? '確認' : '編輯'}</button>
            {isEditing ? null :
            <button
              className="btn btn-warning"
              role="button"
              onClick={this.handleDelClick}
            >刪除</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SingleArticlePage;
