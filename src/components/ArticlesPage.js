import 'isomorphic-fetch';
import React, { Component } from 'react';


class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderArticlesList = this.renderArticlesList.bind(this);
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(json => {
        this.setState({
          list: json,
        });
      });
  }

  renderArticlesList() {
    const c = [];
    for (let i = 0; i < this.state.list.length; i += 1) {
      c.append(
        <tr>
          <th>{i}</th>
          <th>{this.state.list[i].title}</th>
          <th>{this.state.list[i].updated_at}</th>
          <th>{this.state.list[i].created_at}</th>
        </tr>
      );
    }
    return c;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* implement */}
            <table className="table">
              <caption>{'What\'s on the list?'}</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Last updated time</th>
                  <th>Created time</th>
                </tr>
              </thead>
              <tbody>
                {this.renderArticlesList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesPage;
