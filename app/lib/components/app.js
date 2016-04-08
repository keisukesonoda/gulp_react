import React from 'react';
import ReactDOM from 'react-dom';
// 分割ファイルでexportしたclass Message
import Message from './message';
// jqueryを使用するなら
// import $ from 'jquery'

// メインclass App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt1: 'Hello',
      txt2: 'World!',
    };
  }
  _handleChange(str, event) {
    console.log(str);
    console.log(event.currentTarget);
    if (event.target.getAttribute('data-reactid') === '.0.0.1') {
      this.setState({
        txt1: event.target.value,
        txt2: this.state.txt2,
      });
    } else if (event.target.getAttribute('data-reactid') === '.0.1.1') {
      this.setState({
        txt1: this.state.txt1,
        txt2: event.target.value,
      });
    }
  }
  render() {
    console.log(process.env.NODE_ENV);
    const list = [1, 2, 3].map(item => {
      const str = `abc${item}`;
      return <div>{str}</div>;
    });
    return (
      <div>
        {list}
        <p>インプット１: <input type="text" value={this.state.txt1} onChange={this._handleChange.bind(this, 'input1')} /></p>
        <p>インプット２: <input type="text" value={this.state.txt2} onChange={this._handleChange.bind(this, 'input2')} /></p>
        {/* importしたMessageクラスを呼び出し&stateをMessageクラスに渡す */}
        <Message t1={this.state.txt1} t2={this.state.txt2} />
      </div>
    );
  }
}

// app クラスを描画
ReactDOM.render(<App />, document.getElementById('app'));