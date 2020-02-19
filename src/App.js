import React, { Component } from 'react';

import './App.css';
import Form from './components/formInput';
import Button from './components/button';
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			nil1: null,
			nil2: null,
			nil3: null,
			hasil: null,
			checked1: false,
			checked2: false,
			checked3: false,
			data: []
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleCheck = (e) => {
		const checked = e.target.checked;
		this.setState({ [e.target.id]: checked });

		console.log(checked);
		if (checked === false) {
			this.setState({ [e.target.name]: '' });
		}
	};

	handleOpr = (e) => {
		e.preventDefault();
		const opr = e.target.name;
		const data1 = [];
		data1.push(this.state.nil1, this.state.nil2, this.state.nil3);
		const data = data1.map(Number).filter((e) => e !== 0);
		console.log(data);

		let result = data[0];

		console.log(data);

		switch (opr) {
			case 'plus':
				if (data.length <= 1) {
					this.setState({ hasil: 'error' });
				} else {
					for (let i = 1; i < data.length; i++) {
						result += data[i];
					}
					this.setState({ hasil: result });
				}
				break;

			case 'min':
				if (data.length <= 1) {
					this.setState({ hasil: 'error' });
				} else {
					for (let i = 1; i < data.length; i++) {
						result -= data[i];
					}
					this.setState({ hasil: result });
				}
				break;
			case 'div':
				if (data.length <= 1) {
					this.setState({ hasil: 'error' });
				} else {
					for (let i = 1; i < data.length; i++) {
						result /= data[i];
					}
					this.setState({ hasil: result });
				}
				break;
			case 'multiple':
				if (data.length <= 1) {
					this.setState({ hasil: 'error' });
				} else {
					for (let i = 1; i < data.length; i++) {
						result *= data[i];
					}
					this.setState({ hasil: result });
				}
				break;
			default:
				this.setState({ hasil: result });
		}
	};

	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
				<div style={{ border: '1px solid', width: '30%' }}>
					<Form
						nil1={this.state.nil1}
						nil2={this.state.nil2}
						nil3={this.state.nil3}
						change={this.handleChange}
						checked={this.handleCheck}
						checked1={this.state.checked1}
						checked2={this.state.checked2}
						checked3={this.state.checked3}
					/>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							marginTop: '30px'
						}}>
						<Button onClick={this.handleOpr} />
						<div>
							<hr />
						</div>
						<p>Hasil : {this.state.hasil}</p>
					</div>
				</div>
			</div>
		);
	}
}
