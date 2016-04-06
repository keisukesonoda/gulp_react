import React from 'react';
import ReactDOM from 'react-dom';
// 分割ファイルでexportしたclass Message
import Message from './message';

// メインclass App
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			txt1: 'Hello',
			txt2: 'World!'
		}
	}
	handleChange(event) {
		if( event.target.getAttribute('data-reactid') === '.0.0.1' ) {
			this.setState({
				txt1: event.target.value,
				txt2: this.state.txt2
			})
		} else if( event.target.getAttribute('data-reactid') === '.0.1.1' ) {
			this.setState({
				txt1: this.state.txt1,
				txt2: event.target.value
			})
		}
	}
	hoge(str) {
		console.log(str);
	}
	render() {
		return (
			<div>
				<p>インプット１: <input type="text" value={this.state.txt1} onChange={this.handleChange.bind(this)} /></p>
				<p>インプット２: <input type="text" value={this.state.txt2} onChange={this.handleChange.bind(this)} /></p>
				{/* importしたMessageクラスを呼び出し&stateをMessageクラスに渡す */}
				<Message t1={this.state.txt1} t2={this.state.txt2} />
			</div>
		);
	}
}

// app クラスを描画
ReactDOM.render(<App />, document.getElementById('app'));