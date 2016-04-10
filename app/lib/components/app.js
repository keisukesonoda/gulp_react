import React from 'react';
import ReactDOM from 'react-dom';
// jqueryを使用するなら
// import $ from 'jquery'
// 分割ファイルでexportしたclass読み込み
import Message from './message';
import CommentBox from './tutoriall';

// メインclass App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt1: 'Hello',
      txt2: 'World!',
    };
  }
  // 引数はeventよりも前に入る
  _handleChange(str, event) {
    // console.log(str);
    // console.log(event.currentTarget);
    if (str === 'input1') {
      this.setState({
        txt1: event.target.value,
        txt2: this.state.txt2,
      });
    } else if (str === 'input2') {
      this.setState({
        txt1: this.state.txt1,
        txt2: event.target.value,
      });
    }
  }
  render() {
    // console.log(process.env.NODE_ENV);
    const list = [1, 2, 3].map(item => {
      const str = `abc${item}`;
      return <div>{str}</div>;
    });
    const DATA = [
      {
        id: 0,
        author: 'Pete Hunt',
        text: 'This is on comment',
      },
      {
        id: 1,
        author: 'Jordan Walke',
        text: 'this is *another* comment',
      },
    ];
    return (
      <div>
        {/* {list} */}
        <p>インプット１: <input type="text" value={this.state.txt1} onChange={this._handleChange.bind(this, 'input1')} /></p>
        <p>インプット２: <input type="text" value={this.state.txt2} onChange={this._handleChange.bind(this, 'input2')} /></p>
        {/* importしたMessageクラスを呼び出し&stateをMessageクラスに渡す */}

        <Message t1={this.state.txt1} t2={this.state.txt2} />

        <div className="wrap-comment-box">
          {/* <CommentBox data={DATA} /> */}
          <CommentBox url="api/comments" />
        </div>

      </div>
    );
  }
}

// app クラスを描画
ReactDOM.render(<App />, document.getElementById('contents'));
