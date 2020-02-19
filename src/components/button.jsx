import React from 'react';

const button = (props) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-around', width: '90%' }}>
			<button name='plus' onClick={props.onClick}>
				+
			</button>
			<button name='min' onClick={props.onClick}>
				-
			</button>
			<button name='div' onClick={props.onClick}>
				/
			</button>
			<button name='multiple' onClick={props.onClick}>
				*
			</button>
		</div>
	);
};
export default button;
