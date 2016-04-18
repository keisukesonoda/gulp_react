import React from 'react';
import ReactDOM from 'react-dom';
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
  _handleCommentSubmit(comment) {
    // TODO: サーバに送信、リストをリフレッシュ
    let comments = this.state.data;
    let newComments = comments.concat([comment]);
    this.setState({data: newComments});
    // axios.post(this.props.url, {
    //   data: comment,
    // })
    // .then((response) => {
    //   // success
    //   this.setState({
    //     data: response.data,
    //   });
    // })
    // .catch((response) => {
    //   //fail
    //   console.log('fail: ', this.props.url, response);
    // })
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
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this._handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}


class Hoge extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="hoge">
        hogehoge
      </div>
    );
  }
}


class CommentList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    // map関数を使うことでまわしてくれる
    const commentNodes = this.props.data.map( (comment) => {
      return (
        // keyを指定しないとwarningが出る
        // <Comment key={comment.ID} author={comment.author}>{comment.text}</Comment>
        <Comment author={comment.author}>{comment.text}</Comment>
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
  // constructor(props) {
  //   super(props);
  // }
  _handleSubmit(e) {
    e.preventDefault();
    let author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    let text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    // CommentBox内のonCommentSubmitを叩く
    this.props.onCommentSubmit({ author: author, text: text });
    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.text).value = '';
    return;
  }
  render() {
    return (
      // イベント関数へ渡す時に.bind(this)してやる
      <form className="commentForm" onSubmit={this._handleSubmit.bind(this)}>
        <input type="text" placeholder="your name" ref="author" />
        <input type="text" placeholder="say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}


class Comment extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="comment">
        <h3 className="commentAuthor">{this.props.author}</h3>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

