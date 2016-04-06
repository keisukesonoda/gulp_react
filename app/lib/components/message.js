import React from 'react';

// React.Componentを継承したclass Message を定義してexport
export default class Message extends React.Component {
	constructor(props) {
		super(props);
		// 下記と同意ぽい
		//React.Component.call( this, props )
	}
	render() {
		return (
			<h1>{this.props.t1} {this.props.t2}</h1>
		);
	}
}