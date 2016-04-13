import React from 'react';
import axios from 'axios';

/*
１つのコンポーネントファイルでexportできるのクラスは１つだけ
その他のパーツクラスはこのファイル内でのみ有効
*/


export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  loadCommentsFromServer() {
    // ajaxの代わり
    axios.get(this.props.url, {
      responseType: 'json',
    })
    .then((response) => {
      // success
      this.setState({
        data: response.data,
      });
    })
    .catch((response) => {
      // fail
      console.log(this.props.url, response);
    });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    // .bind(this)してあげないと2週目以降でthisがとれなくなってしまう。
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }
  render() {
    return (
      <div>
        <h2>Comments</h2>
        {/* <Hoge /> */}
        {/* <CommentList data={this.props.data} /> */}
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
}



class Hoge extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="hoge">
        hogehoge
      </div>
    );
  }
}



class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // map関数を使うことでまわしてくれる
    const commentNodes = this.props.data.map( (comment) => {
      return (
        // keyを指定しないとwarningが出る
        <Comment key={comment.ID} author={comment.author}>{comment.text}</Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}



class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
}


class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="comment">
        <h3 className="commentAuthor">{this.props.author}</h3>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

